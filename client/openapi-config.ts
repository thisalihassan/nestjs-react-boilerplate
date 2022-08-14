import { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'swagger.json',
  apiFile: '@client/store/api.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/reducers/generated.ts',
  exportName: 'rtk',
  hooks: true,
};

export default config;
