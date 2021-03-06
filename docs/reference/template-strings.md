---
title: Template Strings Reference
---

# Template string reference

Below you'll find the schema of the keys available when interpolating template strings (see our [Variables and Templating](../guides/variables-and-templating.md) guide for more information and usage examples).

Note that there are four sections below, since different configuration sections have different keys available to them. Please make sure to refer to the correct section.

## Project configuration context

The following keys are available in any template strings within project definitions in `garden.yml` config files (see the [Provider](#provider-configuration-context) section below for additional keys available when configuring `providers`):


### `${local.*}`

Context variables that are specific to the currently running environment/machine.

| Type     |
| -------- |
| `object` |

### `${local.artifactsPath}`

The absolute path to the directory where exported artifacts from test and task runs are stored.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.artifactsPath}
```

### `${local.env.*}`

A map of all local environment variables (see https://nodejs.org/api/process.html#process_process_env).

| Type     |
| -------- |
| `object` |

### `${local.platform}`

A string indicating the platform that the framework is running on (see https://nodejs.org/api/process.html#process_process_platform)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.platform}
```

### `${local.username}`

The current username (as resolved by https://github.com/sindresorhus/username)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.username}
```


## Provider configuration context

The following keys are available in template strings under the `providers` key (or `environments[].providers) in project configs.

Providers can also reference outputs defined by other providers, via the `${providers.<provider-name>.outputs}` key. For details on which outputs are available for a given provider, please refer to the [reference](https://docs.garden.io/providers) docs for the provider in question, and look for the _Outputs_ section.


### `${local.*}`

Context variables that are specific to the currently running environment/machine.

| Type     |
| -------- |
| `object` |

### `${local.artifactsPath}`

The absolute path to the directory where exported artifacts from test and task runs are stored.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.artifactsPath}
```

### `${local.env.*}`

A map of all local environment variables (see https://nodejs.org/api/process.html#process_process_env).

| Type     |
| -------- |
| `object` |

### `${local.platform}`

A string indicating the platform that the framework is running on (see https://nodejs.org/api/process.html#process_process_platform)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.platform}
```

### `${local.username}`

The current username (as resolved by https://github.com/sindresorhus/username)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.username}
```

### `${environment.*}`

Information about the environment that Garden is running against.

| Type     |
| -------- |
| `object` |

### `${environment.name}`

The name of the environment Garden is running against.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${environment.name}
```

### `${project.*}`

Information about the Garden project.

| Type     |
| -------- |
| `object` |

### `${project.name}`

The name of the Garden project.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${project.name}
```

### `${providers.*}`

Retrieve information about providers that are defined in the project.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${variables.*}`

A map of all variables defined in the project configuration.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${var.*}`

Alias for the variables field.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |


## Module configuration context

The below keys are available in template strings in module configs. These include all the keys from the sections above.

Modules can reference outputs defined by providers, via the `${providers.<provider-name>.outputs}` key. For details on which outputs are available for a given provider, please refer to the [reference](https://docs.garden.io/providers) docs for the provider in question, and look for the _Outputs_ section.

Modules can also reference outputs defined by other modules, via the `${modules.<module-name>.outputs}` key, as well as service and task outputs via the `${runtime.services.<service-name>.outputs}` and `${runtime.tasks.<task-name>.outputs}` keys.
For details on which outputs are available for a given module type, please refer to the [reference](https://docs.garden.io/module-types) docs for the module type in question, and look for the _Outputs_ section.


### `${local.*}`

Context variables that are specific to the currently running environment/machine.

| Type     |
| -------- |
| `object` |

### `${local.artifactsPath}`

The absolute path to the directory where exported artifacts from test and task runs are stored.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.artifactsPath}
```

### `${local.env.*}`

A map of all local environment variables (see https://nodejs.org/api/process.html#process_process_env).

| Type     |
| -------- |
| `object` |

### `${local.platform}`

A string indicating the platform that the framework is running on (see https://nodejs.org/api/process.html#process_process_platform)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.platform}
```

### `${local.username}`

The current username (as resolved by https://github.com/sindresorhus/username)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.username}
```

### `${environment.*}`

Information about the environment that Garden is running against.

| Type     |
| -------- |
| `object` |

### `${environment.name}`

The name of the environment Garden is running against.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${environment.name}
```

### `${project.*}`

Information about the Garden project.

| Type     |
| -------- |
| `object` |

### `${project.name}`

The name of the Garden project.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${project.name}
```

### `${providers.*}`

Retrieve information about providers that are defined in the project.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${variables.*}`

A map of all variables defined in the project configuration.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${var.*}`

Alias for the variables field.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${modules.*}`

Retrieve information about modules that are defined in the project.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${runtime.*}`

Runtime outputs and information from services and tasks (only resolved at runtime when deploying services and running tasks).

| Type     |
| -------- |
| `object` |

### `${runtime.services.*}`

Runtime information from the services that the service/task being run depends on.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${runtime.tasks.*}`

Runtime information from the tasks that the service/task being run depends on.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |


## Output configuration context

The below keys are available in template strings for _project outputs_, specified in `outputs[].value` keys in project config files. These include all the keys from the sections above.

Output values can reference outputs defined by providers, via the `${providers.<provider-name>.outputs}` key. For details on which outputs are available for a given provider, please refer to the [reference](https://docs.garden.io/providers) docs for the provider in question, and look for the _Outputs_ section.

Output values may also reference outputs defined by modules, via the `${modules.<module-name>.outputs}` key, as well as service and task outputs via the `${runtime.services.<service-name>.outputs}` and `${runtime.tasks.<task-name>.outputs}` keys.
For details on which outputs are available for a given module type, please refer to the [reference](https://docs.garden.io/module-types) docs for the module type in question, and look for the _Outputs_ section.


### `${local.*}`

Context variables that are specific to the currently running environment/machine.

| Type     |
| -------- |
| `object` |

### `${local.artifactsPath}`

The absolute path to the directory where exported artifacts from test and task runs are stored.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.artifactsPath}
```

### `${local.env.*}`

A map of all local environment variables (see https://nodejs.org/api/process.html#process_process_env).

| Type     |
| -------- |
| `object` |

### `${local.platform}`

A string indicating the platform that the framework is running on (see https://nodejs.org/api/process.html#process_process_platform)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.platform}
```

### `${local.username}`

The current username (as resolved by https://github.com/sindresorhus/username)

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${local.username}
```

### `${environment.*}`

Information about the environment that Garden is running against.

| Type     |
| -------- |
| `object` |

### `${environment.name}`

The name of the environment Garden is running against.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${environment.name}
```

### `${project.*}`

Information about the Garden project.

| Type     |
| -------- |
| `object` |

### `${project.name}`

The name of the Garden project.

| Type     |
| -------- |
| `string` |

Example:

```yaml
my-variable: ${project.name}
```

### `${providers.*}`

Retrieve information about providers that are defined in the project.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${variables.*}`

A map of all variables defined in the project configuration.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${var.*}`

Alias for the variables field.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${modules.*}`

Retrieve information about modules that are defined in the project.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${runtime.*}`

Runtime outputs and information from services and tasks (only resolved at runtime when deploying services and running tasks).

| Type     |
| -------- |
| `object` |

### `${runtime.services.*}`

Runtime information from the services that the service/task being run depends on.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

### `${runtime.tasks.*}`

Runtime information from the tasks that the service/task being run depends on.

| Type     | Default |
| -------- | ------- |
| `object` | `{}`    |

