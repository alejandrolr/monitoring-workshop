# Prometheus

Set up prometheus components:

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm upgrade prometheus -i --namespace=default prometheus-community/prometheus --values=./values.yaml
```

## Dependencies

By default this chart installs additional, dependent charts:

- [stable/kube-state-metrics](https://github.com/helm/charts/tree/master/stable/kube-state-metrics)

To disable the dependency during installation, set `kubeStateMetrics.enabled` to `false`.

## Uninstall Chart

```
helm uninstall prometheus -n default
```

This removes all the Kubernetes components associated with the chart and deletes the release.
