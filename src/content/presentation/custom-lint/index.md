---
title: 'Fjern implisitt prosjektkunnskap med linting'
description: 'Intro to abstract syntax trees, custom lint rules and how to use it to reduce implicit project knowledge'
url: https://vimeo.com/669321312
conference:
  name: JavaZone 2022
  url: https://2022.javazone.no/
publishDate: '04 July 2023'
language: 'no'
sort: 20
coverImage:
  src: './cover.jpeg'
  alt: 'Mikael Brevik at JavaZone 2022'
---

I tillegg til blomster på første dag, får nye team-tilskudd ofte utdelt fiendtlige footguns. Samme footgun som resten av teamet har: Implisitt prosjektkunnskap. Eller prosjektnormer om du vil. Den kunnskapen de som har vært i kodebasen for alltid bare kjenner på kroppen. Ting du absolutt må unngå å gjøre, men er vanskelig å fange opp og krever alle konstant på alerten. Vi kan være gode på Code Reviews og ha gode rutiner, men all manuell sjekk vil være sårbart. All denne implisitte kunnskapen tilrettelegger for et minefelt. Som i all programmering er eksplisitt kunnskap bedre enn implisitt kunnskap. Ingen kommer på å lese dokumentasjon i tilfelle det kan stå noe relevant, og kommentarer har for liten kontrast i editoren. Vi trenger noe bedre system for a fange opp dette!

Det finnes allerede veldig gode mekanismer for å håndheve implisitte regler i en kodebase, slik det har gjort i et par ti-år: Linting! Statisk analyse av kodebasen og validering opp mot et definert sett med regler. Men implisitt prosjektkunnskap kan være kode- eller domenespesifikt og ofte veldig spesialisert for akkurat din kodebase. Eller for ditt team. Men vi kan bruke samme system og mekanikk for å lage våre egne regler, som kun gjelder for oss. Og heldigvis lever vi i en tid hvor disse verktøyene er enklere tilgjengelig enn noen gang.

I denne presentasjonen utforsker vi linting, abstrakte syntaks trær og tre-traversering for hvordan du kan skrive dine prosjektspesifikke regler! Konseptene og tankesettet er gjenbrukbart i flere programmeringsspråk men fleste eksempler vil være med bruk av TypeScript og eslint.
