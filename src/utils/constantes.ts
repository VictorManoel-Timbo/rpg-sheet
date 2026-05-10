export const RACES = {
    'Humano Comum': {
        stats: { ag: 0, co: 0, em: 0, in: 0, me: 0, pr: 0, qu: 0, re: 0, sd: 0, st: 0 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 30, resistence: 10, encumbrance: 10, stride: 0, dp: 10 },
        averages: {
            M: { height: 175, weight: 80 },
            F: { height: 163, weight: 65 }
        }
    },
    'Anão': {
        stats: { ag: -5, co: 10, em: -5, in: 0, me: 0, pr: -5, qu: -5, re: 10, sd: 5, st: 5 },
        resists: { ph: 10, mt: 20, fe: 10, es: 0, ch: 0 },
        info: { hits: 30, resistence: 10, encumbrance: 10, stride: -0.3, dp: 10 },
        averages: {
            M: { height: 135, weight: 75 },
            F: { height: 130, weight: 70 }
        }
    },
    'Alto Elfo': {
        stats: { ag: 5, co: 0, em: 5, in: 5, me: 5, pr: 10, qu: 5, re: -5, sd: -5, st: 0 },
        resists: { ph: 0, mt: 10, fe: 100, es: 20, ch: 0 },
        info: { hits: 30, resistence: 10, encumbrance: 10, stride: 0.2, dp: 10 },
        averages: {
            M: { height: 195, weight: 85 },
            F: { height: 185, weight: 75 }
        }
    },
    'Halfling': {
        stats: { ag: 15, co: 5, em: 0, in: 0, me: -5, pr: -10, qu: 10, re: 10, sd: 10, st: -15 },
        resists: { ph: 15, mt: 15, fe: 15, es: 15, ch: 15 },
        info: { hits: 30, resistence: 10, encumbrance: 10, stride: -0.6, dp: 10 },
        averages: {
            M: { height: 100, weight: 30 },
            F: { height: 95, weight: 28 }
        }
    }
};

export const PROFESSIONS = {
    'Sem Profissão': {
        costs: {
            'Animal': '2/4',
            'Awareness': '2/4',
            'Battle Expertise': '3/5',
            'Body Discipline': '4/6',
            'Brawn': '3/4',
            'Combat Expertise': '3/5',
            'Combat': 'Vária',
            'Composition': '2/4',
            'Crafting': '2/4',
            'Delving': '4/6',
            'Environmental': '3/4',
            'Gymnastic': '3/4',
            'Lore': '1/3',
            'Lore: Languages': '1/3',
            'Magical Expertise': '4/6',
            'Medical': '3/4',
            'Mental Discipline': '3/4',
            'Movement': '2/4',
            'Performance Art': '2/4',
            'Power Manipulation': '4/6',
            'Science': '4/6',
            'Social': '2/4',
            'Subterfuge': '3/5',
            'Technical': '3/5',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '4/6',
                    'Base': '4/6',
                    'Ritual Magic': '5/7',
                    'Closed': '7/10',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    },
    'Ladino': {
        costs: {
            'Animal': '2/4',
            'Awareness': '2/3',
            'Battle Expertise': '3/4',
            'Body Discipline': '4/6',
            'Brawn': '2/4',
            'Combat Expertise': '3/4',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '2/4',
            'Delving': '7/10',
            'Environmental': '2/4',
            'Gymnastic': '2/3',
            'Lore': '2/4',
            'Lore: Languages': '2/4',
            'Magical Expertise': '7/10',
            'Medical': '3/4',
            'Mental Discipline': '5/7',
            'Movement': '1/3',
            'Performance Art': '2/4',
            'Power Manipulation': '9/12',
            'Science': '5/7',
            'Social': '2/3',
            'Subterfuge': '1/3',
            'Technical': '2/3',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    },
    'Trabalhador Braçal': {
        costs: {
            'Animal': '1/3',
            'Awareness': '3/4',
            'Battle Expertise': '4/6',
            'Body Discipline': '6/8',
            'Brawn': '1/2',
            'Combat Expertise': '4/6',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '1/3',
            'Delving': '7/10',
            'Environmental': '1/3',
            'Gymnastic': '2/3',
            'Lore': '2/3',
            'Lore: Languages': '2/3',
            'Magical Expertise': '7/10',
            'Medical': '2/4',
            'Mental Discipline': '4/6',
            'Movement': '1/3',
            'Performance Art': '2/3',
            'Power Manip': '9/12',
            'Science': '4/6',
            'Social': '2/3',
            'Subterfuge': '3/4',
            'Technical': '2/3',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    },
    'Ladrão': {
        costs: {
            'Animal': '2/3',
            'Awareness': '1/2',
            'Battle Expertise': '3/5',
            'Body Discipline': '6/8',
            'Brawn': '4/6',
            'Combat Expertise': '3/5',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '2/3',
            'Delving': '5/7',
            'Environmental': '2/4',
            'Gymnastic': '2/3',
            'Lore': '2/4',
            'Lore: Languages': '2/4',
            'Magical Expertise': '7/10',
            'Medical': '3/4',
            'Mental Discipline': '4/6',
            'Movement': '1/3',
            'Performance Art': '2/3',
            'Power Manip': '9/12',
            'Science': '4/6',
            'Social': '1/3',
            'Subterfuge': '1/2',
            'Technical': '1/2',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    },
    'Guerreiro': {
        costs: {
            'Animal': '2/3',
            'Awareness': '2/4',
            'Battle Expertise': '1/2',
            'Body Discipline': '4/6',
            'Brawn': '1/3',
            'Combat Expertise': '1/3',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '2/4',
            'Delving': '7/10',
            'Environmental': '2/4',
            'Gymnastic': '3/4',
            'Lore': '2/4',
            'Lore: Languages': '2/4',
            'Magical Expertise': '7/10',
            'Medical': '3/4',
            'Mental Discipline': '5/7',
            'Movement': '2/4',
            'Performance Art': '3/4',
            'Power Manip': '9/12',
            'Science': '5/7',
            'Social': '2/4',
            'Subterfuge': '3/5',
            'Technical': '5/7',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    },
    'Monge Guerreiro': {
        costs: {
            'Animal': '3/5',
            'Awareness': '2/4',
            'Battle Expertise': '3/5',
            'Body Discipline': '1/3',
            'Brawn': '3/4',
            'Combat Expertise': '1/2',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '7/10',
            'Environmental': '3/5',
            'Gymnastic': '1/2',
            'Lore': '2/4',
            'Lore: Languages': '2/4',
            'Magical Expertise': '7/10',
            'Medical': '4/6',
            'Mental Discipline': '2/3',
            'Movement': '1/2',
            'Performance Art': '3/4',
            'Power Manip': '9/12',
            'Science': '5/7',
            'Social': '3/4',
            'Subterfuge': '2/4',
            'Technical': '5/7',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    },
    'Estudioso': {
        costs: {
            'Animal': '3/4',
            'Awareness': '1/3',
            'Battle Expertise': '7/10',
            'Body Discipline': '6/8',
            'Brawn': '6/8',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '1/2',
            'Crafting': '2/3',
            'Delving': '2/3',
            'Environmental': '2/4',
            'Gymnastic': '3/5',
            'Lore': '1/2',
            'Lore: Languages': '1/2',
            'Magical Expertise': '4/6',
            'Medical': '1/3',
            'Mental Discipline': '1/3',
            'Movement': '3/5',
            'Performance Art': '1/3',
            'Power Manip': '4/6',
            'Science': '1/3',
            'Social': '2/3',
            'Subterfuge': '4/6',
            'Technical': '2/4',
            'Vocation': '3/4'
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '4/6',
                    'Base': '4/6',
                    'Ritual Magic': '5/7',
                    'Closed': '7/10',
                    'Arcane': '15/20',
                    'Restricted': '15/20'
                }
            }
        }
    }
};

export const CULTURES = [
    'Cosmopolita', 'Marítima', 'Nômade', 'Rural', 'Saqueadora', 'Severa', 'Silvestre', 'Subterrânea', 'Terras Altas', 'Urbana'
];