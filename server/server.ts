import { createConnection, ProposedFeatures } from 'vscode-languageserver/node';

let connection = createConnection(ProposedFeatures.all);
