
import { NavItem, KeyGoal, ASHKObjective, KeyDeadline, ActionPlanItem, Actor, AlbanianQuarter, ProgressItem, TechHighlight } from './types';
import { CalendarIcon, TargetIcon, CheckCircleIcon, UsersIcon, DocumentTextIcon, LightBulbIcon, CogIcon, ServerIcon, ShieldCheckIcon, GlobeAltIcon } from './components/Icons';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Përmbledhje', href: '#hero' },
  { name: 'Vizioni & Qëllimet', href: '#vision-goals' },
  { name: 'Afatet Kryesore', href: '#key-deadlines' },
  { name: 'Progresi Aktual', href: '#current-progress'},
  { name: 'Plani i Veprimit', href: '#action-plan' },
  { name: 'Aktorët', href: '#actors' },
  { name: 'Teknologjia', href: '#technology' },
];

export const HERO_DATA = {
  title: "Udhërrëfyesi Strategjik për Dixhitalizimin e Kadastrës Shqiptare 2025-2028",
  subtitle: "Transformimi digjital i sistemit kadastral shqiptar për një shërbim modern, të integruar, të saktë, transparent dhe të qëndrueshëm.",
  executiveSummary: `Ky Udhërrëfyes Strategjik përcakton vizionin, objektivat dhe hapat konkretë për transformimin digjital të sistemit kadastral shqiptar për periudhën 2025-2028. Vizioni themelor është krijimi i një sistemi kadastral modern, të integruar, të saktë, transparent dhe të qëndrueshëm, i cili garanton sigurinë juridike mbi pronën, mbështet zhvillimin e qëndrueshëm të territorit dhe lehtëson shkëmbimet ekonomike, duke e përafruar Shqipërinë me standardet më të mira të Bashkimit Evropian. Objektivat kryesore përfshijnë përfundimin e procesit të digjitalizimit të të gjitha kartelave të pasurive, dokumentacionit tekniko-ligjor dhe hartave kadastrale; finalizimin e procesit të regjistrimit fillestar në të gjithë territorin e vendit; dhe përmirësimin e vazhdueshëm të cilësisë së të dhënave kadastrale. Këto synime do të arrihen përmes një plani zbatimi të strukturuar, me afate të përcaktuara qartë, ku parashikohet që pjesa më e madhe e punës së digjitalizimit të përfundojë brenda vitit 2026, ndërsa regjistrimi fillestar të kompletohet plotësisht deri në fund të vitit 2028.`
};

export const VISION_TEXT = "Krijimi i një sistemi kadastral digjital modern, të integruar, të saktë, transparent dhe të qëndrueshëm. Ky sistem do të jetë në gjendje të garantojë në mënyrë efektive sigurinë juridike mbi pronën, të mbështesë proceset e planifikimit dhe zhvillimit të qëndrueshëm të territorit, si dhe të lehtësojë shkëmbimet ekonomike, duke kontribuar kështu në progresin e gjithanshëm të vendit.";

export const KEY_GOALS_DATA: KeyGoal[] = [
  { id: 'goal1', title: 'Sistem Dixhital i Përditësuar', description: 'Të përcaktojë rrugën e qartë për realizimin dhe mirëmbajtjen e një sistemi digjital të saktë, të qëndrueshëm dhe vazhdimisht të përditësuar të regjistrit të pronës.' },
  { id: 'goal2', title: 'Siguri e Plotë Ligjore', description: 'Të garantojë sigurinë e plotë ligjore mbi të drejtat e pronësisë për të gjithë mbajtësit e titujve.' },
  { id: 'goal3', title: 'Mbështetje për Planifikim Strategjik', description: 'Të ofrojë mbështetje të fuqishme për planifikimin strategjik dhe zhvillimin e qëndrueshëm të territorit, si në nivel kombëtar ashtu edhe vendor.' },
  { id: 'goal4', title: 'Lehtësim i Shkëmbimeve Ekonomike', description: 'Të lehtësojë dhe të përshpejtojë shkëmbimet ekonomike që lidhen me pasuritë e paluajtshme.' },
  { id: 'goal5', title: 'Qartësi Ligjore mbi Pronësinë', description: 'Të sigurojë qartësi të padiskutueshme ligjore mbi statusin e pronësisë.' },
  { id: 'goal6', title: 'Përmirësim i Qeverisjes së Tokës', description: 'Të përmirësojë ndjeshëm qeverisjen e tokës dhe të territorit në tërësi.' },
  { id: 'goal7', title: 'Rritje e Transparencës dhe Efikasitetit', description: 'Rritjen e transparencës dhe efikasitetit në të gjitha proceset e administrimit të tokës dhe territorit.' },
];

export const ASHK_OBJECTIVES_DATA: ASHKObjective[] = [
  { id: 'ashk1', description: 'Përfundimin e procesit të plotë të skanimit të dokumentacionit teknik e ligjor.', deadline: 'Brenda muajit Dhjetor 2025' },
  { id: 'ashk2', description: 'Përfundimin e procesit të plotë të digjitalizimit të të gjitha kartelave të pasurive të paluajtshme.', deadline: 'Brenda muajit Qershor 2026' },
  { id: 'ashk3', description: 'Përfundimin e procesit të digjitalizimit të të gjitha hartave kadastrale.', deadline: 'Brenda muajit Dhjetor 2026' },
  { id: 'ashk4', description: 'Finalizimin e procesit të Regjistrimit Fillestar të pasurive të paluajtshme në të gjithë territorin e vendit.', deadline: 'Brenda vitit 2028' },
  { id: 'ashk5', description: 'Sigurimin e mirëmbajtjes së vazhdueshme dhe digjitalizimit të të dhënave të reja kadastrale, duke mundësuar akses të lehtë, të shpejtë dhe të sigurt në informacion.', deadline: 'Vazhdimisht' }
];

export const KEY_DEADLINES_DATA: KeyDeadline[] = [
  { id: 'kd1', title: 'Skanimi i Dokumenteve Pronësore', date: '31 Dhjetor 2025', description: 'Përfundimi i skanimit të të gjitha dokumenteve pronësore.', icon: React.createElement(DocumentTextIcon) },
  { id: 'kd2', title: 'Digjitalizimi i Kartelave të Pasurive', date: '30 Qershor 2026', description: 'Përfundimi i digjitalizimit të të gjitha kartelave të pasurive.', icon: React.createElement(CogIcon) },
  { id: 'kd3', title: 'Regjistrimi Fillestar (95%)', date: '30 Qershor 2026', description: 'Përfundimi i regjistrimit fillestar në 95% të zonave kadastrale.', icon: React.createElement(TargetIcon) },
  { id: 'kd4', title: 'Digjitalizimi i Hartave Kadastrale', date: '31 Dhjetor 2026', description: 'Përmes projektit IPA të menaxhuar nga UNOPS.', icon: React.createElement(GlobeAltIcon) },
  { id: 'kd5', title: 'Regjistrimi Fillestar (100%)', date: '31 Dhjetor 2028', description: 'Përfundimi i regjistrimit fillestar në 100% të zonave kadastrale.', icon: React.createElement(CheckCircleIcon) },
];

export const ACTION_PLAN_DATA: ActionPlanItem[] = [
  {
    nr: '1',
    process: 'Skanimi dokumentacionit Tekniko Ligjor',
    actor: 'QKD',
    y2025: { [AlbanianQuarter.Q2]: 93446, [AlbanianQuarter.Q3]: 93446, [AlbanianQuarter.Q4]: 93446 }
  },
  {
    nr: '2',
    process: 'Digjitalizimi Kartelave',
    actor: 'QKD',
    y2025: { [AlbanianQuarter.Q2]: 467610, [AlbanianQuarter.Q3]: 467610, [AlbanianQuarter.Q4]: 467610 },
    y2026: { [AlbanianQuarter.Q1]: 378000, [AlbanianQuarter.Q2]: 378000 }
  },
  {
    nr: '3',
    process: 'Digjitalizimi Hartave',
    actor: 'BE (1 vit)',
    y2025: { [AlbanianQuarter.Q2]: "N/A", [AlbanianQuarter.Q3]: "N/A", [AlbanianQuarter.Q4]: "Plan sipas kontraktorit te BE" },
    note: "Projekti BE (1 vit) shtrihet përtej Q4 2025. Detajet sipas planit të kontraktorit."
  },
  {
    nr: '4',
    process: 'Regjistrimi Fillestar',
    actor: 'QKD',
    y2026: { [AlbanianQuarter.Q3]: 15, [AlbanianQuarter.Q4]: 15 },
    y2027: { [AlbanianQuarter.Q1]: 15, [AlbanianQuarter.Q2]: 15, [AlbanianQuarter.Q3]: 15, [AlbanianQuarter.Q4]: 15 }
  },
  {
    nr: '', // Part of process 4
    process: '', // Part of process 4
    actor: 'Kontraktim ASHK',
    y2026: { [AlbanianQuarter.Q3]: 56 }
  },
  {
    nr: '', // Part of process 4
    process: '', // Part of process 4
    actor: 'BE',
    y2026: { [AlbanianQuarter.Q2]: 20 }
  },
  {
    nr: '', // Part of process 4
    process: '', // Part of process 4
    actor: 'FSHZH, Bashki',
    y2025: { [AlbanianQuarter.Q3]: 2 }
  },
  {
    nr: '', // Part of process 4
    process: '', // Part of process 4
    actor: 'Kontraktim ASHK',
    y2025: { [AlbanianQuarter.Q4]: 106 }
  }
];


export const ACTION_PLAN_YEARS = [2025, 2026, 2027, 2028];
export const ACTION_PLAN_QUARTERS_MAP: { [year: number]: AlbanianQuarter[] } = {
  2025: [AlbanianQuarter.Q2, AlbanianQuarter.Q3, AlbanianQuarter.Q4],
  2026: [AlbanianQuarter.Q1, AlbanianQuarter.Q2, AlbanianQuarter.Q3, AlbanianQuarter.Q4],
  2027: [AlbanianQuarter.Q1, AlbanianQuarter.Q2, AlbanianQuarter.Q3, AlbanianQuarter.Q4],
  2028: [AlbanianQuarter.Q1, AlbanianQuarter.Q2, AlbanianQuarter.Q3, AlbanianQuarter.Q4],
};


export const ACTORS_DATA: Actor[] = [
  { id: 'ashk', name: 'Agjencia Shtetërore e Kadastrës', acronym: 'ASHK', description: 'Luan rolin qendror si institucioni përgjegjës për politikat dhe strategjitë në fushën e kadastrës. Harton Udhërrëfyesin, monitoron dhe raporton progresin, mban përgjegjësinë finale për cilësinë e të dhënave.', icon: React.createElement(UsersIcon, {className: "text-brand-primary"}) },
  { id: 'qkd', name: 'Qendra e Kadastrës Dixhitale', acronym: 'QKD', description: 'Njësia kryesore zbatuese për komponentët teknikë. Zbaton proceset e skanimit, digjitalizimit, arkivimit dhe regjistrimit fillestar për një numër zonash.', icon: React.createElement(CogIcon, {className: "text-brand-primary"}) },
  { id: 'unops', name: 'United Nations Office for Project Services', acronym: 'UNOPS', description: 'Vepron si zbatues i projektit të financuar nga IPA i BE, veçanërisht për digjitalizimin e hartave kadastrale. Përgjegjës për menaxhimin, cilësinë dhe raportimin.', icon: React.createElement(GlobeAltIcon, {className: "text-brand-primary"}) },
  { id: 'fshzh_njvqv', name: 'Fondi Shqiptar i Zhvillimit (FSHZH) dhe Njësitë e Vetëqeverisjes Vendore (NjVQV)', acronym: 'FSHZH/NjVQV', description: 'Luajnë rol mbështetës në procesin e regjistrimit fillestar dhe/ose përmirësimit të të dhënave kadastrale në territoret e tyre administrative.', icon: React.createElement(UsersIcon, {className: "text-brand-primary"}) },
  { id: 'be', name: 'Bashkimi Evropian', acronym: 'BE', description: 'Partner kyç financiar dhe teknik. Ofron mbështetje financiare (fonde IPA), asistencë teknike dhe monitoron përputhshmërinë me standardet e BE.', icon: React.createElement(LightBulbIcon, {className: "text-brand-primary"}) },
  { id: 'public_businesses', name: 'Publiku dhe Bizneset', description: 'Përfituesit kryesorë të procesit. Do të përfitojnë shërbime kadastrale digjitale më të shpejta, të sakta, transparente dhe më pak të kushtueshme.', icon: React.createElement(UsersIcon, {className: "text-brand-primary"}) },
];

export const CURRENT_PROGRESS_DATA: ProgressItem[] = [
    { id: 'cp1', title: 'Digjitalizimi i Kartelave (QKD)', value: '>47%', description: 'E totalit të kartelave të pasurive janë digjitalizuar nga QKD.' },
    { id: 'cp2', title: 'Skanimi i Dokumenteve Pronësore (QKD)', value: '>68%', description: 'E dokumenteve pronësore janë skanuar nga QKD.' },
    { id: 'cp3', title: 'Përmirësimi i të Dhënave (QKD)', value: '~2000', description: 'Pasuri të paluajtshme për të cilat është kryer përmirësimi i të dhënave nga struktura e QKD.'}
];

export const TECHNOLOGY_HIGHLIGHTS_DATA: TechHighlight[] = [
    { id: 'th1', title: 'Server të Sigurt', description: 'Infrastrukturë serverike me kapacitet të lartë dhe masa të forta sigurie për të pritur dhe përpunuar volumin e madh të të dhënave kadastrale.', icon: React.createElement(ServerIcon, {className: "text-brand-accent"})},
    { id: 'th2', title: 'Sisteme Ruajtje të Dhënash Moderne', description: 'Zgjidhje moderne për ruajtjen e të dhënave (data storage) që garantojnë integritetin, disponueshmërinë dhe rikuperimin e shpejtë.', icon: React.createElement(ShieldCheckIcon, {className: "text-brand-accent"})},
    { id: 'th3', title: 'Aplikacione Menaxhimi Dokumentesh (DMS)', description: 'Sisteme të specializuara për menaxhimin elektronik të dokumenteve (DMS) për organizim, kërkim dhe akses efikas.', icon: React.createElement(DocumentTextIcon, {className: "text-brand-accent"})},
    { id: 'th4', title: 'Platforma Ndërvepruese (Multifunksionali)', description: 'Zhvillimi i platformave softuerike ndërvepruese me sistemet e tjera shtetërore, për shkëmbim të sigurt dhe efikas të të dhënave.', icon: React.createElement(CogIcon, {className: "text-brand-accent"})},
    { id: 'th5', title: 'Përputhshmëri me INSPIRE', description: 'Strukturimi dhe menaxhimi i të dhënave hapësinore dhe kadastrale sipas Direktivës INSPIRE të BE-së.', icon: React.createElement(GlobeAltIcon, {className: "text-brand-accent"})},
    { id: 'th6', title: 'Teknologjia Blockchain (e konsideruar)', description: 'Përdorimi i teknologjive të sigurta si blockchain për ruajtjen dhe shkëmbimin e të dhënave po konsiderohet për rritjen e integritetit.', icon: React.createElement(ShieldCheckIcon, {className: "text-brand-accent"})}
];

