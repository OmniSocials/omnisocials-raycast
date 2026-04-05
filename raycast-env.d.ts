/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Your OmniSocials API key. Get it at app.omnisocials.com > Settings > API. For multiple workspaces, use the Manage Workspaces command instead. */
  "apiKey"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-post` command */
  export type CreatePost = ExtensionPreferences & {}
  /** Preferences accessible in the `view-drafts` command */
  export type ViewDrafts = ExtensionPreferences & {}
  /** Preferences accessible in the `view-scheduled` command */
  export type ViewScheduled = ExtensionPreferences & {}
  /** Preferences accessible in the `view-published` command */
  export type ViewPublished = ExtensionPreferences & {}
  /** Preferences accessible in the `view-accounts` command */
  export type ViewAccounts = ExtensionPreferences & {}
  /** Preferences accessible in the `analytics` command */
  export type Analytics = ExtensionPreferences & {}
  /** Preferences accessible in the `manage-workspaces` command */
  export type ManageWorkspaces = ExtensionPreferences & {}
  /** Preferences accessible in the `switch-workspace` command */
  export type SwitchWorkspace = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-post` command */
  export type CreatePost = {}
  /** Arguments passed to the `view-drafts` command */
  export type ViewDrafts = {}
  /** Arguments passed to the `view-scheduled` command */
  export type ViewScheduled = {}
  /** Arguments passed to the `view-published` command */
  export type ViewPublished = {}
  /** Arguments passed to the `view-accounts` command */
  export type ViewAccounts = {}
  /** Arguments passed to the `analytics` command */
  export type Analytics = {}
  /** Arguments passed to the `manage-workspaces` command */
  export type ManageWorkspaces = {}
  /** Arguments passed to the `switch-workspace` command */
  export type SwitchWorkspace = {}
}

