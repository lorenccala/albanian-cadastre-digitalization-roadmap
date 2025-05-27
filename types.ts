import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface KeyGoal {
  id: string;
  title: string;
  description: string;
}

export interface ASHKObjective {
  id: string;
  description: string;
  deadline: string;
}

export interface KeyDeadline {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: React.ReactElement<{ className?: string }>;
}

export enum AlbanianQuarter {
  Q1 = "Janar-Mars",
  Q2 = "Prill-Qershor",
  Q3 = "Korrik-Shtator",
  Q4 = "Tetor-Dhjetor",
}

export interface YearlyTargets {
  [AlbanianQuarter.Q1]?: number | string;
  [AlbanianQuarter.Q2]?: number | string;
  [AlbanianQuarter.Q3]?: number | string;
  [AlbanianQuarter.Q4]?: number | string;
}

export interface ActionPlanItem {
  nr: string;
  process: string;
  actor: string;
  y2025?: YearlyTargets;
  y2026?: YearlyTargets;
  y2027?: YearlyTargets;
  y2028?: YearlyTargets;
  note?: string;
}

export interface Actor {
  id: string;
  name: string;
  acronym?: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProgressItem {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface TechHighlight {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}