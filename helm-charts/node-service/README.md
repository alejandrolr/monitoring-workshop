## Installation, use Helm3

Set up node-service:

```
helm upgrade node-service . -i --namespace=default
```

## Uninstalling the Chart

To uninstall/delete the grafana deployment:

```
helm uninstall node-service -n default
```

The command removes all the Kubernetes components associated with the chart and deletes the release.
