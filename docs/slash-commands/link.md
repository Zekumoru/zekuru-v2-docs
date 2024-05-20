---
sidebar_label: "/link"
sidebar_position: 6
---

# /link

## Description

Links two translate channels unidirectionally, bidirectionally, or recursively.

```command
/link <source-channel: optional> <target-channel: required> <mode: optional>
```

:::caution
You can only link translate channels! Translate channels mean channels **that are set** to a language. Use the `/set` command first before linking.
:::

## Options

### source-channel: optional

The source channel to link. If not provided, it takes the current channel where the command is used.

### target-channel: required

The target channel to link.

### mode: optional

Specifies the linking mode. Default is **bidirectional**.

Linking modes:

- **Unidirectional:** Links source channel to target channel only but not vice-versa.
- **Bidirectional:** Links source channel and target channel with each other.
- **Recursive:** Links source channel to target channel and to all other translate channels that the source and target channels are linked to. **Including translate channels that are links of links of source and target channels.**

:::tip Making sure a translate channel is linked to all other translate channels
If you already have, for example, 5 translate channels that are all linked together and you want to add a new translate channel, you can do `/link new-channel other-channel recursive` and that new translate channel will get linked to all the other 5 translate channels.
:::
