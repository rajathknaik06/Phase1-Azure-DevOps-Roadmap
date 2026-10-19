<#
.SYNOPSIS
    Checks that the Student Placement Portal Foundation project has every required
    file and directory. Read-only: it never creates, changes or deletes anything.

.DESCRIPTION
    Works in Windows PowerShell 5.1 and PowerShell 7. Uses only built-in commands.

    By default the project root is the folder ABOVE this script's "scripts" folder,
    so you can run the script from any working directory:
        project\student-placement-portal\scripts\..  =>  project\student-placement-portal

    Exit codes:
        0  validation succeeded (everything present, correct type)
        1  one or more required files/directories are missing (or the wrong type)
        2  unexpected failure while validating

.PARAMETER ProjectRoot
    Optional. Folder that contains index.html, styles.css, app.js and so on.

.PARAMETER SimulateUnexpectedError
    Test hook. Forces an exception so you can see exit code 2. Not for normal use.

.EXAMPLE
    # From the repository root, in the VS Code PowerShell terminal:
    powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"

.EXAMPLE
    # Validate a different copy of the project:
    .\Check-PortalStructure.ps1 -ProjectRoot "C:\temp\portal-copy"
#>
[CmdletBinding()]
param(
    [string]$ProjectRoot,
    [switch]$SimulateUnexpectedError
)

$ErrorActionPreference = 'Stop'

try {
    # 1. Work out which folder to validate.
    if ([string]::IsNullOrWhiteSpace($ProjectRoot)) {
        if ($PSScriptRoot) {
            $ProjectRoot = Split-Path -Path $PSScriptRoot -Parent
        }
        else {
            $ProjectRoot = (Get-Location).Path
        }
    }

    if ($SimulateUnexpectedError) {
        throw "Simulated unexpected error (test hook)."
    }

    Write-Host "Student Placement Portal - structure check"
    Write-Host "Project root: $ProjectRoot"
    Write-Host ""

    # 2. The root folder itself must exist.
    if (-not (Test-Path -LiteralPath $ProjectRoot -PathType Container)) {
        Write-Host "[FAIL] MISSING DIRECTORY: project root '$ProjectRoot'"
        Write-Host ""
        Write-Host "RESULT: FAILED (exit code 1)"
        exit 1
    }

    # 3. Required items. Type is 'File' or 'Directory'.
    $required = @(
        @{ Path = "README.md";                         Type = "File" },
        @{ Path = "index.html";                        Type = "File" },
        @{ Path = "styles.css";                        Type = "File" },
        @{ Path = "app.js";                            Type = "File" },
        @{ Path = "data";                              Type = "Directory" },
        @{ Path = "data\students.json";                Type = "File" },
        @{ Path = "scripts";                           Type = "Directory" },
        @{ Path = "scripts\Check-PortalStructure.ps1"; Type = "File" }
    )

    $passCount = 0
    $problems = 0

    foreach ($item in $required) {
        $fullPath = Join-Path -Path $ProjectRoot -ChildPath $item.Path

        if ($item.Type -eq "File") {
            $isFile = Test-Path -LiteralPath $fullPath -PathType Leaf
            $isDir  = Test-Path -LiteralPath $fullPath -PathType Container
            if ($isFile) {
                Write-Host "[PASS] file       $($item.Path)"
                $passCount++
            }
            elseif ($isDir) {
                Write-Host "[FAIL] WRONG TYPE: '$($item.Path)' is a directory but a file is required"
                $problems++
            }
            else {
                Write-Host "[FAIL] MISSING FILE: $($item.Path)"
                $problems++
            }
        }
        else {
            $isDir  = Test-Path -LiteralPath $fullPath -PathType Container
            $isFile = Test-Path -LiteralPath $fullPath -PathType Leaf
            if ($isDir) {
                Write-Host "[PASS] directory  $($item.Path)"
                $passCount++
            }
            elseif ($isFile) {
                Write-Host "[FAIL] WRONG TYPE: '$($item.Path)' is a file but a directory is required"
                $problems++
            }
            else {
                Write-Host "[FAIL] MISSING DIRECTORY: $($item.Path)"
                $problems++
            }
        }
    }

    # 4. Summary and exit code.
    Write-Host ""
    Write-Host "Checked: $($required.Count)  Passed: $passCount  Problems: $problems"

    if ($problems -gt 0) {
        Write-Host "RESULT: FAILED (exit code 1)"
        exit 1
    }

    Write-Host "RESULT: PASSED (exit code 0)"
    exit 0
}
catch {
    Write-Host "UNEXPECTED ERROR: $($_.Exception.Message)"
    Write-Host "RESULT: FAILED (exit code 2)"
    exit 2
}
