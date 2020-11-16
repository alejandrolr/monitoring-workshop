## Installation, use Helm3

Set up grafana:

```
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm upgrade grafana grafana/grafana -i --namespace=default --values=./values.yaml
```

## Uninstalling the Chart

To uninstall/delete the grafana deployment:

```
helm uninstall grafana -n default
```

The command removes all the Kubernetes components associated with the chart and deletes the release.
