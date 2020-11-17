## Installation, use Helm3

Set up angular-app:

```
helm upgrade angular-app . -i --namespace=default
```

## Uninstalling the Chart

To uninstall/delete the angular-app deployment:

```
helm uninstall angular-app -n default
```

The command removes all the Kubernetes components associated with the chart and deletes the release.
