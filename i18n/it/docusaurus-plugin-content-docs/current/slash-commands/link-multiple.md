---
sidebar_label: "/link-multiple"
sidebar_position: 7
---

# /link-multiple

## Descrizione

Collega più canali contemporaneamente.

```command
/link-multiple <channels: obbligatorio>
```

:::caution
Puoi collegare solo canali di traduzione! I canali di traduzione sono quelli **impostati** su una lingua specifica. Utilizza prima il comando `/set` prima di collegare canali.
:::

:::info
La differenza tra `/link` con la modalità ricorsiva e `/link-multiple` è che il primo collegherà il canale di traduzione specificato (sorgente o destinazione) in tutti i collegamenti dei collegamenti dei canali di traduzione sorgente e destinazione, mentre il secondo collegherà solo tra loro i canali di traduzione specificati. Di conseguenza, `/link-multiple` **non collegherà i collegamenti dei collegamenti dei canali di traduzione specificati**.

Se queste funzionalità di collegamento non sono chiare, prova a sperimentare con questi comandi.
:::

## Opzioni

### channels: obbligatorio

Elenco di canali da collegare. Esempio: `#canale1 #canale2 ... #canaleN`.
