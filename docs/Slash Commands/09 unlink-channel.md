---
sidebar_label: "/unlink-channel"
---

# /unlink-channel

## Description

Unlinks channel from all other translate channels.

```command
/unlink-channel <channel: optional>
```

:::info
The difference between `/unlink` and `/unlink-channel` is that the former unlinks the given source and target channels with each other while the latter unlinks the given translate channel to all its other translate channels.

If this unlinking business is unclear, try experimenting these commands.
:::

## Options

### channel: optional

The channel to unlink all its links to other translate channels. If not provided, it unlinks the current channel where the command is used.
