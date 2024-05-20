---
sidebar_label: "/link"
sidebar_position: 6
---

# /link

## Descrizione

Collega due canali di traduzione in modo unidirezionale, bidirezionale o ricorsivo.

```command
/link <source-channel: opzionale> <target-channel: obbligatorio> <mode: opzionale>
```

:::caution
Puoi collegare solo canali di traduzione! I canali di traduzione sono quelli **impostati** su una lingua specifica. Utilizza prima il comando `/set` prima di collegare canali.
:::

## Opzioni

### source-channel: opzionale

Il canale sorgente da collegare. Se non specificato, viene utilizzato il canale corrente in cui viene utilizzato il comando.

### target-channel: obbligatorio

Il canale di destinazione da collegare.

### mode: opzionale

Specifica la modalità di collegamento. L'impostazione predefinita è **bidirezionale**.

Modalità di collegamento:

- **Unidirezionale (Unidirectional):** Collega il canale sorgente al canale di destinazione, ma non viceversa.
- **Bidirezionale (Bidirectional):** Collega il canale sorgente e il canale di destinazione tra loro.
- **Ricorsivo (Recursive):** Collega il canale sorgente al canale di destinazione e a tutti gli altri canali di traduzione a cui sono collegati il canale sorgente e il canale di destinazione. **Inclusi i canali di traduzione che sono collegamenti di collegamenti del canale sorgente e di destinazione**.

:::tip Assicurarsi che un canale di traduzione sia collegato a tutti gli altri canali di traduzione
Se hai già, ad esempio, 5 canali di traduzione collegati tra loro e desideri aggiungerne un altro, puoi eseguire il comando `/link nuovo-canale altro-canale mode:recursive` e il nuovo canale di traduzione verrà collegato a tutti gli altri 5 canali di traduzione.
:::
