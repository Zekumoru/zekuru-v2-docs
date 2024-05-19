---
sidebar_label: "/link-multiple"
---

# /link-multiple

## Description

Links multiple channels at once.

```command
/link-multiple <channels: required>
```

:::caution
You can only link translate channels! Translate channels mean channels **that are set** to a language. Use the `/set` command first before linking.
:::

:::info
The difference between `/link` with recursive mode and `/link-multiple` is that the former will link the given translate channel (either source or target) into all links of links of the source and target translate channels while the latter will only link with each other the given translate channels. Therefore, `/link-multiple` **won't link the links of links of the given translate channels**.

If these linking stuff isn't clear, try experimenting with the commands.
:::

## Options

### channels: required

List of channels to link. For example: `#channel1 #channel2 ... #channelN`
