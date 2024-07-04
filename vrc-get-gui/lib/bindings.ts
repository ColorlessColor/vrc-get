/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function environmentLanguage() {
    return invoke()<string>("environment_language")
}

export function environmentSetLanguage(language: string) {
    return invoke()<null>("environment_set_language", { language })
}

export function environmentTheme() {
    return invoke()<string>("environment_theme")
}

export function environmentSetTheme(theme: string) {
    return invoke()<null>("environment_set_theme", { theme })
}

export function environmentGetProjectSorting() {
    return invoke()<string>("environment_get_project_sorting")
}

export function environmentSetProjectSorting(sorting: string) {
    return invoke()<null>("environment_set_project_sorting", { sorting })
}

export function environmentProjects() {
    return invoke()<TauriProject[]>("environment_projects")
}

export function environmentAddProjectWithPicker() {
    return invoke()<TauriAddProjectWithPickerResult>("environment_add_project_with_picker")
}

export function environmentRemoveProject(listVersion: number, index: number, directory: boolean) {
    return invoke()<null>("environment_remove_project", { listVersion,index,directory })
}

export function environmentRemoveProjectByPath(path: string, directory: boolean) {
    return invoke()<null>("environment_remove_project_by_path", { path,directory })
}

export function environmentCopyProjectForMigration(sourcePath: string) {
    return invoke()<string>("environment_copy_project_for_migration", { sourcePath })
}

export function environmentSetFavoriteProject(listVersion: number, index: number, favorite: boolean) {
    return invoke()<null>("environment_set_favorite_project", { listVersion,index,favorite })
}

export function environmentProjectCreationInformation() {
    return invoke()<TauriProjectCreationInformation>("environment_project_creation_information")
}

export function environmentCheckProjectName(basePath: string, projectName: string) {
    return invoke()<TauriProjectDirCheckResult>("environment_check_project_name", { basePath,projectName })
}

export function environmentCreateProject(basePath: string, projectName: string, template: TauriProjectTemplate) {
    return invoke()<TauriCreateProjectResult>("environment_create_project", { basePath,projectName,template })
}

export function environmentRefetchPackages() {
    return invoke()<null>("environment_refetch_packages")
}

export function environmentPackages() {
    return invoke()<TauriPackage[]>("environment_packages")
}

export function environmentRepositoriesInfo() {
    return invoke()<TauriRepositoriesInfo>("environment_repositories_info")
}

export function environmentHideRepository(repository: string) {
    return invoke()<null>("environment_hide_repository", { repository })
}

export function environmentShowRepository(repository: string) {
    return invoke()<null>("environment_show_repository", { repository })
}

export function environmentSetHideLocalUserPackages(value: boolean) {
    return invoke()<null>("environment_set_hide_local_user_packages", { value })
}

export function environmentDownloadRepository(url: string, headers: { [key: string]: string }) {
    return invoke()<TauriDownloadRepository>("environment_download_repository", { url,headers })
}

export function environmentAddRepository(url: string, headers: { [key: string]: string }) {
    return invoke()<TauriAddRepositoryResult>("environment_add_repository", { url,headers })
}

export function environmentRemoveRepository(id: string) {
    return invoke()<null>("environment_remove_repository", { id })
}

export function environmentImportRepositoryPick() {
    return invoke()<TauriImportRepositoryPickResult>("environment_import_repository_pick")
}

export function environmentImportDownloadRepositories(channel: string, repositories: TauriRepositoryDescriptor[]) {
    return invoke()<AsyncCallResult<number, ([TauriRepositoryDescriptor, TauriDownloadRepository])[]>>("environment_import_download_repositories", { channel,repositories })
}

export function environmentImportAddRepositories(repositories: TauriRepositoryDescriptor[]) {
    return invoke()<null>("environment_import_add_repositories", { repositories })
}

export function environmentClearPackageCache() {
    return invoke()<null>("environment_clear_package_cache")
}

export function environmentUnityVersions() {
    return invoke()<TauriUnityVersions>("environment_unity_versions")
}

export function environmentGetSettings() {
    return invoke()<TauriEnvironmentSettings>("environment_get_settings")
}

export function environmentPickUnityHub() {
    return invoke()<TauriPickUnityHubResult>("environment_pick_unity_hub")
}

export function environmentPickUnity() {
    return invoke()<TauriPickUnityResult>("environment_pick_unity")
}

export function environmentPickProjectDefaultPath() {
    return invoke()<TauriPickProjectDefaultPathResult>("environment_pick_project_default_path")
}

export function environmentPickProjectBackupPath() {
    return invoke()<TauriPickProjectBackupPathResult>("environment_pick_project_backup_path")
}

export function environmentSetShowPrereleasePackages(value: boolean) {
    return invoke()<null>("environment_set_show_prerelease_packages", { value })
}

export function environmentSetBackupFormat(backupFormat: string) {
    return invoke()<null>("environment_set_backup_format", { backupFormat })
}

export function environmentSetReleaseChannel(releaseChannel: string) {
    return invoke()<null>("environment_set_release_channel", { releaseChannel })
}

export function projectDetails(projectPath: string) {
    return invoke()<TauriProjectDetails>("project_details", { projectPath })
}

export function projectInstallPackage(projectPath: string, envVersion: number, packageIndex: number) {
    return invoke()<TauriPendingProjectChanges>("project_install_package", { projectPath,envVersion,packageIndex })
}

export function projectInstallMultiplePackage(projectPath: string, envVersion: number, packageIndices: number[]) {
    return invoke()<TauriPendingProjectChanges>("project_install_multiple_package", { projectPath,envVersion,packageIndices })
}

export function projectUpgradeMultiplePackage(projectPath: string, envVersion: number, packageIndices: number[]) {
    return invoke()<TauriPendingProjectChanges>("project_upgrade_multiple_package", { projectPath,envVersion,packageIndices })
}

export function projectResolve(projectPath: string) {
    return invoke()<TauriPendingProjectChanges>("project_resolve", { projectPath })
}

export function projectRemovePackages(projectPath: string, names: string[]) {
    return invoke()<TauriPendingProjectChanges>("project_remove_packages", { projectPath,names })
}

export function projectApplyPendingChanges(projectPath: string, changesVersion: number) {
    return invoke()<null>("project_apply_pending_changes", { projectPath,changesVersion })
}

export function projectMigrateProjectTo2022(projectPath: string) {
    return invoke()<null>("project_migrate_project_to_2022", { projectPath })
}

export function projectCallUnityForMigration(channel: string, projectPath: string, unityPath: string) {
    return invoke()<AsyncCallResult<string, TauriCallUnityForMigrationResult>>("project_call_unity_for_migration", { channel,projectPath,unityPath })
}

export function projectMigrateProjectToVpm(projectPath: string) {
    return invoke()<null>("project_migrate_project_to_vpm", { projectPath })
}

export function projectOpenUnity(projectPath: string, unityPath: string) {
    return invoke()<boolean>("project_open_unity", { projectPath,unityPath })
}

export function projectIsUnityLaunching(projectPath: string) {
    return invoke()<boolean>("project_is_unity_launching", { projectPath })
}

export function projectCreateBackup(channel: string, projectPath: string) {
    return invoke()<AsyncCallResult<null, null>>("project_create_backup", { channel,projectPath })
}

export function projectGetCustomUnityArgs(projectPath: string) {
    return invoke()<string[] | null>("project_get_custom_unity_args", { projectPath })
}

export function projectSetCustomUnityArgs(projectPath: string, args: string[] | null) {
    return invoke()<boolean>("project_set_custom_unity_args", { projectPath,args })
}

export function projectGetUnityPath(projectPath: string) {
    return invoke()<string | null>("project_get_unity_path", { projectPath })
}

export function projectSetUnityPath(projectPath: string, unityPath: string | null) {
    return invoke()<boolean>("project_set_unity_path", { projectPath,unityPath })
}

export function utilOpen(path: string) {
    return invoke()<null>("util_open", { path })
}

export function utilGetLogEntries() {
    return invoke()<LogEntry[]>("util_get_log_entries")
}

export function utilGetVersion() {
    return invoke()<string>("util_get_version")
}

export function utilCheckForUpdate() {
    return invoke()<CheckForUpdateResponse>("util_check_for_update")
}

export function utilInstallAndUpgrade(version: number) {
    return invoke()<null>("util_install_and_upgrade", { version })
}

export function deepLinkHasAddRepository() {
    return invoke()<boolean>("deep_link_has_add_repository")
}

export function deepLinkTakeAddRepository() {
    return invoke()<AddRepositoryInfo | null>("deep_link_take_add_repository")
}

export function deepLinkInstallVcc() {
    return invoke()<null>("deep_link_install_vcc")
}

export type AddRepositoryInfo = { url: string; headers: { [key: string]: string } }
export type AsyncCallResult<P, R> = { type: "Result"; value: R } | { type: "Started" } | { type: "UnusedProgress"; progress: P }
export type CheckForUpdateResponse = { version: number; is_update_available: boolean; current_version: string; latest_version: string; update_description: string | null }
export type LogEntry = { time: string; level: LogLevel; target: string; message: string }
export type LogLevel = "Error" | "Warn" | "Info" | "Debug" | "Trace"
export type TauriAddProjectWithPickerResult = "NoFolderSelected" | "InvalidSelection" | "AlreadyAdded" | "Successful"
export type TauriAddRepositoryResult = "BadUrl" | "Success"
export type TauriBasePackageInfo = { name: string; display_name: string | null; description: string | null; aliases: string[]; version: TauriVersion; unity: [number, number] | null; changelog_url: string | null; vpm_dependencies: string[]; legacy_packages: string[]; is_yanked: boolean }
export type TauriCallUnityForMigrationResult = { type: "ExistsWithNonZero"; status: string } | { type: "FinishedSuccessfully" }
export type TauriConflictInfo = { packages: string[]; unity_conflict: boolean }
export type TauriCreateProjectResult = "AlreadyExists" | "TemplateNotFound" | "Successful"
export type TauriDownloadRepository = { type: "BadUrl" } | { type: "Duplicated" } | { type: "DownloadError"; message: string } | { type: "Success"; value: TauriRemoteRepositoryInfo }
export type TauriEnvironmentSettings = { default_project_path: string; project_backup_path: string; unity_hub: string; unity_paths: ([string, string, boolean])[]; show_prerelease_packages: boolean; backup_format: string; release_channel: string }
export type TauriImportRepositoryPickResult = { type: "NoFilePicked" } | { type: "ParsedRepositories"; repositories: TauriRepositoryDescriptor[]; unparsable_lines: string[] }
export type TauriPackage = ({ name: string; display_name: string | null; description: string | null; aliases: string[]; version: TauriVersion; unity: [number, number] | null; changelog_url: string | null; vpm_dependencies: string[]; legacy_packages: string[]; is_yanked: boolean }) & { env_version: number; index: number; source: TauriPackageSource }
export type TauriPackageChange = { InstallNew: TauriBasePackageInfo } | { Remove: TauriRemoveReason }
export type TauriPackageSource = "LocalUser" | { Remote: { id: string; display_name: string } }
export type TauriPendingProjectChanges = { changes_version: number; package_changes: ([string, TauriPackageChange])[]; remove_legacy_files: string[]; remove_legacy_folders: string[]; conflicts: ([string, TauriConflictInfo])[] }
export type TauriPickProjectBackupPathResult = { type: "NoFolderSelected" } | { type: "InvalidSelection" } | { type: "Successful" }
export type TauriPickProjectDefaultPathResult = { type: "NoFolderSelected" } | { type: "InvalidSelection" } | { type: "Successful"; new_path: string }
export type TauriPickUnityHubResult = { type: "NoFolderSelected" } | { type: "InvalidSelection" } | { type: "Successful" }
export type TauriPickUnityResult = "NoFolderSelected" | "InvalidSelection" | "AlreadyAdded" | "Successful"
export type TauriProject = { list_version: number; index: number; name: string; path: string; project_type: TauriProjectType; unity: string; unity_revision: string | null; last_modified: number; created_at: number; favorite: boolean; is_exists: boolean }
export type TauriProjectCreationInformation = { templates: TauriProjectTemplate[]; default_path: string }
export type TauriProjectDetails = { unity: [number, number] | null; unity_str: string | null; unity_revision: string | null; installed_packages: ([string, TauriBasePackageInfo])[]; should_resolve: boolean }
export type TauriProjectDirCheckResult = "InvalidNameForFolderName" | "MayCompatibilityProblem" | "WideChar" | "AlreadyExists" | "Ok"
export type TauriProjectTemplate = { type: "Builtin"; id: string; name: string } | { type: "Custom"; name: string }
export type TauriProjectType = "Unknown" | "LegacySdk2" | "LegacyWorlds" | "LegacyAvatars" | "UpmWorlds" | "UpmAvatars" | "UpmStarter" | "Worlds" | "Avatars" | "VpmStarter"
export type TauriRemoteRepositoryInfo = { display_name: string; id: string; url: string; packages: TauriBasePackageInfo[] }
export type TauriRemoveReason = "Requested" | "Legacy" | "Unused"
export type TauriRepositoriesInfo = { user_repositories: TauriUserRepository[]; hidden_user_repositories: string[]; hide_local_user_packages: boolean; show_prerelease_packages: boolean }
export type TauriRepositoryDescriptor = { url: string; headers: { [key: string]: string } }
export type TauriUnityVersions = { unity_paths: ([string, string, boolean])[]; recommended_version: string; install_recommended_version_link: string }
export type TauriUserRepository = { id: string; url: string | null; display_name: string }
export type TauriVersion = { major: number; minor: number; patch: number; pre: string; build: string }
