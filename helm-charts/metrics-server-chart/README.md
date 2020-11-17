## Installation, use Helm3

Install/Upgrade metrics-server:

```
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm upgrade metrics-server -i --namespace=default --values=./values.yaml stable-old/metrics-server
```

## Uninstalling the Chart

To uninstall/delete the metrics-server deployment:

```
helm uninstall metrics-server -n default
```

The command removes all the Kubernetes components associated with the chart and deletes the release.