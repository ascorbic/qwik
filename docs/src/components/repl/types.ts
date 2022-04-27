import type {
  Diagnostic,
  MinifyMode,
  QwikRollupPluginOptions,
  TransformModuleInput,
  TransformModule,
} from '@builder.io/qwik/optimizer';
import type { NoSerialize } from '../../../../dist-dev/@builder.io-qwik/core';

export interface ReplProps {
  inputs?: TransformModuleInput[];
  selectedInputPath?: string;
  layout: 'narrow' | 'wide';
  enableFileDelete?: boolean;
}

export interface ReplInputOptions extends Omit<QwikRollupPluginOptions, 'srcDir'> {
  srcInputs: TransformModuleInput[];
}

export interface ReplStore {
  inputs: TransformModuleInput[];
  outputHtml: string;
  clientModules: ReplModuleOutput[];
  ssrModules: ReplModuleOutput[];
  diagnostics: Diagnostic[];
  selectedInputPath: string;
  selectedOutputPanel: OutputPanel;
  selectedClientModule: string;
  selectedSsrModule: string;
  minify: MinifyMode;
  ssrBuild: boolean;
  entryStrategy: string;
  version: string;
  debug: boolean;
  enableFileDelete?: boolean;
  iframeUrl: string;
  iframeWindow: NoSerialize<MessageEventSource> | null;
}

export interface ReplModuleOutput {
  path: string;
  isEntry: boolean;
  code: string;
  size: string;
}

export interface ReplResult {
  type: 'result';
  appHtml: string;
  outputHtml: string;
  clientModules: ReplModuleOutput[];
  ssrModules: ReplModuleOutput[];
  diagnostics: Diagnostic[];
  qwikloader: string;
  docElementAttributes: ReplResultAttributes;
  headAttributes: ReplResultAttributes;
  bodyAttributes: ReplResultAttributes;
  bodyInnerHtml: string;
}

export interface ReplResultAttributes {
  [attrName: string]: string;
}

export type OutputPanel = 'app' | 'outputHtml' | 'clientModules' | 'serverModules' | 'diagnostics';
