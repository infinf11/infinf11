import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: Schema) {
  await libraryGenerator(tree, 
    {name: `util-${schema.name}`,
  directory: schema.directory,
  tags: `type:util, scope:${schema.directory}`
});
  await formatFiles(tree);
  return () => {
    // will not be run when passing --dry-run
    installPackagesTask(tree);
  };
}
interface Schema {
  name: string;
  directory: 'store' | 'api' | 'shared';
}
