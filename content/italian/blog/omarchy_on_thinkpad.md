---
title: "Omarchy: La mia esperienza su un Thinkpad L390 del 2019"
meta_title: "Omarchy: La mia esperienza su un Thinkpad L390 del 2019 "
description: "I computer, questo mondo in cui puoi spendere un capitale oggi e ritrovarti domani con un brutto fermacarte. Grazie di esistere, Linux"
date: 2025-09-15T05:00:00Z
image: "/images/Thinkpad&Things.jpg"
categories: ["OpenSource"]
author: "Maximiliano Mamone"
tags: ["Linux", "Thinkpad"]
draft: false
toc: false
---

Prima di iniziare, se non hai voglia di leggere, ecco per te un video di 5 minuti sul tema [Quando non dovresti spendere più di 100 euro per un computer](https://www.youtube.com/watch?v=jLOzZkeekB8)

Un bel giorno ho deciso che volevo comprarmi un portatile per l'uso di tutti i giorni.
Difatto possedevo già un fisso assemblato da me nel 2020

*Specs (se a qualcuno interessano)*
- CPU: Ryzen 5 3600
- GPU: AMD Radeon RX 5600XT
- RAM: 16 GB DDR4 3200Mhz
- SSD: 512 GB NVMe Crucial P2
- HDD: 1 TB Brand Random

Ma ho sempre apprezzato la comodità e la piacevolezza di avere un computer che puoi portarti facilmente dove vuoi. <br>
Ad esempio sul tavolino di un bar mentre bevi un ottimo cappuccino o anche solo sulla sdraio a goderti il fresco serale del balcone di casa.
Per questi motivi mi sono messo alla ricerca del portatile perfetto per attività tutto sommato leggere, leggere qualche notizia/articolo online, 
prendere due appunti sui contenuti/corsi più interessanti e l'occasionale coding di qualche micro app per risolvere i più banali problemi della vita quotidiana (e non).

Mi è capitato tra gli annunci eBay il Thinkpad L390 con qui sto scrivendo questo post direttamente dal divano, un piccolo e capace portatile da 13", tutto sommato leggero, non troppo vecchio e ancora con discrete capacità computazionali (con il suo onestissimo __i5 8325U da 4c/8t__). Che dire, a **118 euro** con borsa originale Lenovo e caricatore ho subito acquistato.

Una volta arrivato ero prontissimo ad usare il mio "nuovo" fiammante portatile, non prima di aver fatto un fresh install di Windows 11 per evitare sorprese, per poi trovarmi con una macchina si performante, ma non quanto mi aspettassi. Windows 11, ho scoperto poi stava castrando i ben __12 GB di RAM__ (nativamente 8, con un kit che avevo in casa l'ho portato a 12) e il povero processore, impegnando molte risorse per chissà quali attività.

A quel punto era ora di trovargli un nuovo OS, e ovviamente fra le mille distribuzioni Linux non avevo idea di cosa scegliere finchè per caso non sono finito su un video YouTube che parlava di __Omarchy__.

Che cos'è Omarchy, direte voi. Beh citando il suo creatore.

> Omarchy is an omakase distribution based on Arch Linux and the tiling window manager Hyprland. It ships with just about everything a modern software developer needs to be productive immediately. That's everything from Neovim (btw) to Spotify, Chromium to Typora, and Alacritty to LibreOffice. Hell, even Zoom is there!

Omakase è una parola che significa "mi fido di te" o "lascio fare a te" in giapponese ed è un'esperienza culinaria in cui il cliente lascia allo chef la piena libertà di decidere le pietanze da servire. Lo chef crea un menu degustazione basato sugli ingredienti più freschi e stagionali del giorno.
Allo stesso modo Om (Omakase) - archy (Arch linux) è una versione preconfezionata di Arch Linux fatta da [DHH](https://en.wikipedia.org/wiki/David_Heinemeier_Hansson) (lo sviluppatore di Ruby on Rails) pensata per l'utente medio che si approccia a Linux e vuole una piacevole esperienza di utilizzo con tutto ciò di cui ha bisogno a portata di mano o facilmente reperibile.

<u>Devo dire che ci è riuscito</u>

In passato mi ero già affacciato al mondo Linux, con Manjaro e PopOs, ma la piacevolezza di utilizzo di Arch con Hyprland mi ha veramente stupito.
Per chi non sapesse cos'è Hyprland si tratta di un window manager, cioè un software che si occupa di gestire le finestre delle applicazioni sullo schermo, di particolare hyprland fa una cosa: posiziona automaticamente sullo schermo ogni nuova applicazione che apri, ridimensionandola frazionando lo spazio in cui appare.
Dopo alcuni minuti ci si sente subito a proprio agio con questo sistema, che mantiene un'interfaccia pulita ed estremamente intuitiva durante l'utilizzo del nostro pc.

"Beh e quindi il Thinkpad ha giovato di sto omacoso?"
__Puoi dirlo forte__

La durata della batteria è aumentata notevolmente, dei 12GB di RAM totali me ne lascia liberi più di __11GB__ se non sto facendo nulla (**Windows 9-9.5**), la reattività nel fare qualunque cosa è aumentata, non devo più dare i miei dati a Windows per sbloccare alcune funzionalità, il processore è mediamente più freddo e di conseguenza il pc mediamente più silenzioso.

E oltre a tutto questo, è stato __divertente__ imparare un nuovo sistema.
Non ci è voluto molto e ho riscoperto il piacere di utilizzare un computer come la prima volta quando avevo 8 anni. 
Inoltre grazie alla comoda guida che vi mette a disposizione (la trovate a questo link [Omarchy Manual](https://learn.omacom.io/2/the-omarchy-manual)) imparerete in un attimo a personalizzare il sistema a vostro piacimento. 

Ecco alcuni esempi di persone a cui lo consiglio:
1. __Studenti__ <br> Se sei uno studente, hai bisogno di un pc per prendere appunti e studiare e ne hai uno in casa non nuovissimo, ti consiglio in generale Linux e nello specifico se ti piace, Omarchy. Darà nuova vita al tuo portatile e renderà quasi "divertente" studiare utilizzando la nuova esperienza utente che avrai a disposizione. Tutto questo risparmiando denaro, che diciamocelo, se sei studente probabilmente non ne hai tanto da spendere.
2. __Persone Privacy Oriented__ <br> Se tieni alla tua privacy e sei stanco di sistemi che raccolgono telemetria e mostrano pubblicità, Omarchy ti offre un ambiente minimale e trasparente: niente servizi opachi che partono all'avvio, pacchetti open source facilmente ispezionabili e controllo totale su cosa installi e cosa comunica in rete. Puoi cifrare il disco, configurare firewall e sandbox, rimuovere il superfluo in pochi comandi e costruirti una stack privacy-friendly senza combattere col bloat preinstallato. Sapere dove finiscono i tuoi dati ridona fiducia e rende l'uso quotidiano del portatile più sereno.
3. __Persone che fanno un uso base del computer__ <br> Se ti limiti a navigare, guardare video, gestire email, scrivere documenti o fare qualche videochiamata, Omarchy ti offre un sistema leggero che si avvia in pochi secondi e rimane reattivo anche su hardware datato. Hai già tutto l’essenziale senza bloat, niente pubblicità o processi misteriosi in background, batteria più duratura e zero distrazioni. Se un domani ti servirà qualcosa in più lo installi con un singolo comando; altrimenti continui così: semplice, veloce, affidabile e senza dover comprare un nuovo portatile.

Che dire, penso di essere stato esaustivo e il verdetto finale è estremamente positivo.
Se Omarchy vi sembra troppo complesso, rimanete sintonizzati! Video e articolo su un altra distro Linux più Windows-friendly, chiamamola così, in arrivo!
[YouTube](https://www.youtube.com/@MaxMamone)