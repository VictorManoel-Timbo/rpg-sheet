export const RACES = {
    'Avinarc': {
        stats: { ag: 4, co: -1, em: -2, in: 0, me: -2, pr: -1, qu: 3, re: 0, sd: 2, st: -2 },
        resists: { ph: -10, mt: 5, fe: 0, es: 5, ch: 5 },
        info: { hits: 20, encumbrance: 0, stride: 0, dp: 35, recM: 1 },
        averages: {
            M: { height: 178, weight: 54.4 },
            F: { height: 165, weight: 44.5 }
        }
    },
    'Anão': {
        stats: { ag: -1, co: 6, em: -6, in: 0, me: 0, pr: -3, qu: -1, re: 0, sd: 0, st: 2 },
        resists: { ph: 10, mt: 15, fe: 0, es: 15, ch: 0 },
        info: { hits: 30, encumbrance: 20, stride: -1, dp: 6, recM: 0.5 },
        averages: {
            M: { height: 137, weight: 61.2 },
            F: { height: 127, weight: 50.8 }
        }
    },
    'Alto Elfo': {
        stats: { ag: 3, co: -1, em: 2, in: 0, me: 2, pr: 3, qu: 2, re: 1, sd: -5, st: -1 },
        resists: { ph: 10, mt: -5, fe: 0, es: -5, ch: -5 },
        info: { hits: 25, encumbrance: 10, stride: 0.6, dp: 3, recM: 2 },
        averages: {
            M: { height: 200, weight: 97.5 },
            F: { height: 190, weight: 79.3 }
        }
    },
    'Elfo Belo': {
        stats: { ag: 0, co: -2, em: 3, in: 2, me: 2, pr: 3, qu: 1, re: 2, sd: -5, st: -2 },
        resists: { ph: 20, mt: -10, fe: 0, es: -10, ch: -10 },
        info: { hits: 20, encumbrance: 10, stride: 0.3, dp: 0, recM: 2 },
        averages: {
            M: { height: 200, weight: 81.6 },
            F: { height: 190, weight: 72.5 }
        }
    },
    'Elfo Cinzento': {
        stats: { ag: 2, co: 0, em: 3, in: 0, me: 1, pr: 3, qu: 3, re: 0, sd: -5, st: 0 },
        resists: { ph: 10, mt: -5, fe: 0, es: -5, ch: -5 },
        info: { hits: 20, encumbrance: 10, stride: 0.6, dp: 2, recM: 2 },
        averages: {
            M: { height: 195, weight: 86.2 },
            F: { height: 185, weight: 70.3 }
        }
    },
    'Elfo da Floresta': {
        stats: { ag: 2, co: 0, em: 2, in: 0, me: 1, pr: 2, qu: 3, re: 0, sd: -5, st: -2 },
        resists: { ph: 20, mt: -5, fe: 0, es: -5, ch: -5 },
        info: { hits: 20, encumbrance: 10, stride: 0, dp: 3, recM: 2 },
        averages: {
            M: { height: 183, weight: 68.0 },
            F: { height: 175, weight: 56.7 }
        }
    },
    'Gnoll': {
        stats: { ag: 2, co: -2, em: 4, in: -2, me: 1, pr: -2, qu: 2, re: 1, sd: 1, st: -3 },
        resists: { ph: 10, mt: 5, fe: 0, es: 0, ch: 5 },
        info: { hits: 20, encumbrance: 0, stride: -1.5, dp: 17, recM: 0.5 },
        averages: {
            M: { height: 107, weight: 20.0 },
            F: { height: 107, weight: 20.0 }
        }
    },
    'Gnomo': {
        stats: { ag: 0, co: -2, em: 2, in: 0, me: 4, pr: 0, qu: 2, re: 2, sd: 1, st: -2 },
        resists: { ph: 5, mt: 0, fe: 0, es: 0, ch: 10 },
        info: { hits: 25, encumbrance: 0, stride: -1, dp: 4, recM: 0.5 },
        averages: {
            M: { height: 135, weight: 38.1 },
            F: { height: 135, weight: 38.1 }
        }
    },
    'Goblin': {
        stats: { ag: 5, co: 5, em: -3, in: 0, me: 0, pr: -3, qu: 2, re: 0, sd: -5, st: 0 },
        resists: { ph: 5, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 0, stride: -1.8, dp: 46, recM: 0.5 },
        averages: {
            M: { height: 91, weight: 15.9 },
            F: { height: 86, weight: 14.1 }
        }
    },
    'Gratar': {
        stats: { ag: 1, co: 3, em: -2, in: 0, me: 0, pr: -2, qu: 0, re: 0, sd: -2, st: 2 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 0, stride: -0.6, dp: 11, recM: 1 },
        averages: {
            M: { height: 163, weight: 104.3 },
            F: { height: 157, weight: 113.4 }
        }
    },
    'Meio Elfo': {
        stats: { ag: 2, co: 0, em: 0, in: 0, me: 0, pr: 2, qu: 2, re: 0, sd: -3, st: 2 },
        resists: { ph: 5, mt: -5, fe: 0, es: -5, ch: -5 },
        info: { hits: 25, encumbrance: 5, stride: 0.3, dp: 18, recM: 1 },
        averages: {
            M: { height: 190, weight: 86.2 },
            F: { height: 180, weight: 61.2 }
        }
    },
    'Halfling': {
        stats: { ag: 5, co: 4, em: -2, in: 0, me: 0, pr: -5, qu: 4, re: 0, sd: -4, st: 0 },
        resists: { ph: 10, mt: 20, fe: 0, es: 25, ch: 0 },
        info: { hits: 25, encumbrance: 0, stride: -1.5, dp: 29, recM: 1 },
        averages: {
            M: { height: 107, weight: 22.7 },
            F: { height: 100, weight: 20.9 }
        }
    },
    'Hobgoblin': {
        stats: { ag: 3, co: 2, em: -2, in: 0, me: -2, pr: -2, qu: 1, re: 0, sd: -2, st: 1 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 0, stride: -0.9, dp: 30, recM: 0.5 },
        averages: {
            M: { height: 137, weight: 42.2 },
            F: { height: 122, weight: 36.3 }
        }
    },
    'Humano da Caverna': {
        stats: { ag: 0, co: 1, em: 0, in: 0, me: -1, pr: 0, qu: 0, re: -1, sd: 0, st: 1 },
        resists: { ph: 0, mt: -5, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 25, stride: -0.6, dp: 41, recM: 1 },
        averages: {
            M: { height: 160, weight: 72.1 },
            F: { height: 145, weight: 61.2 }
        }
    },
    'Humano Comum': {
        stats: { ag: 0, co: 0, em: 0, in: 0, me: 0, pr: 0, qu: 0, re: 0, sd: 0, st: 0 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 0, stride: 0, dp: 50, recM: 1 },
        averages: {
            M: { height: 178, weight: 83.9 },
            F: { height: 165, weight: 69.8 }
        }
    },
    'Humano Superior': {
        stats: { ag: -2, co: 3, em: 0, in: 0, me: 0, pr: 3, qu: -1, re: 1, sd: 0, st: 3 },
        resists: { ph: 0, mt: -5, fe: 0, es: -5, ch: 5 },
        info: { hits: 30, encumbrance: 0, stride: 0.6, dp: 21, recM: 1 },
        averages: {
            M: { height: 195, weight: 113.4 },
            F: { height: 178, weight: 86.2 }
        }
    },
    'Humano Mestiço': {
        stats: { ag: 0, co: 1, em: 0, in: 0, me: 0, pr: 1, qu: 0, re: 0, sd: 0, st: 1 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 30, encumbrance: 0, stride: 0.3, dp: 34, recM: 1 },
        averages: {
            M: { height: 193, weight: 104.3 },
            F: { height: 175, weight: 81.6 }
        }
    },
    'Hvasstonn': {
        stats: { ag: -1, co: 1, em: -2, in: 0, me: 0, pr: -2, qu: 0, re: -1, sd: -4, st: 2 },
        resists: { ph: 10, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 35, encumbrance: 15, stride: 0.9, dp: 27, recM: 1 },
        averages: {
            M: { height: 229, weight: 181.4 },
            F: { height: 203, weight: 149.7 }
        }
    },
    'Idiyva': {
        stats: { ag: 4, co: 0, em: -4, in: 0, me: 0, pr: -1, qu: 4, re: 0, sd: -2, st: 2 },
        resists: { ph: 5, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 10, stride: 0, dp: 10, recM: 1 },
        averages: {
            M: { height: 183, weight: 81.6 },
            F: { height: 165, weight: 65.8 }
        }
    },
    'Kobold': {
        stats: { ag: 5, co: 1, em: -3, in: -1, me: 0, pr: -3, qu: 4, re: 0, sd: -3, st: -1 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 20, encumbrance: 10, stride: -1.5, dp: 75, recM: 0.5 },
        averages: {
            M: { height: 107, weight: 20.0 },
            F: { height: 100, weight: 18.1 }
        }
    },
    'Nycamerith': {
        stats: { ag: 0, co: 0, em: 2, in: 2, me: 2, pr: 2, qu: 2, re: 0, sd: -4, st: -2 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 20, encumbrance: 0, stride: -0.9, dp: 26, recM: 1 },
        averages: {
            M: { height: 132, weight: 38.6 },
            F: { height: 132, weight: 38.6 }
        }
    },
    'Orc Maior': {
        stats: { ag: 0, co: 5, em: 4, in: 0, me: -2, pr: -2, qu: 0, re: -2, sd: -4, st: 3 },
        resists: { ph: 10, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 30, encumbrance: 10, stride: 0, dp: 30, recM: 0.5 },
        averages: {
            M: { height: 183, weight: 99.8 },
            F: { height: 170, weight: 75.3 }
        }
    },
    'Orc Cinzento': {
        stats: { ag: 0, co: -2, em: 0, in: 0, me: 1, pr: 0, qu: 0, re: 1, sd: -2, st: 0 },
        resists: { ph: 5, mt: -10, fe: 0, es: -5, ch: -5 },
        info: { hits: 20, encumbrance: 0, stride: 0, dp: 60, recM: 0.5 },
        averages: {
            M: { height: 168, weight: 72.6 },
            F: { height: 157, weight: 63.5 }
        }
    },
    'Orc Menor': {
        stats: { ag: 0, co: 2, em: -3, in: 0, me: -2, pr: -3, qu: 0, re: -2, sd: -4, st: 1 },
        resists: { ph: 5, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 5, stride: -0.6, dp: 75, recM: 0.5 },
        averages: {
            M: { height: 152, weight: 68.0 },
            F: { height: 142, weight: 56.7 }
        }
    },
    'Orc Scrug': {
        stats: { ag: 0, co: 4, em: -2, in: 0, me: -2, pr: -2, qu: 0, re: -2, sd: -4, st: 2 },
        resists: { ph: 10, mt: 5, fe: 0, es: 5, ch: 5 },
        info: { hits: 35, encumbrance: 10, stride: 1.5, dp: 0, recM: 0.5 },
        averages: {
            M: { height: 251, weight: 260.8 },
            F: { height: 229, weight: 217.7 }
        }
    },
    'Orc Vard': {
        stats: { ag: 0, co: 4, em: -2, in: 0, me: -2, pr: -2, qu: 0, re: -2, sd: -4, st: 2 },
        resists: { ph: 5, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 30, encumbrance: 0, stride: 0, dp: 18, recM: 0.5 },
        averages: {
            M: { height: 183, weight: 113.4 },
            F: { height: 170, weight: 86.2 }
        }
    },
    'Plynos': {
        stats: { ag: 2, co: 3, em: -2, in: 1, me: 0, pr: -1, qu: 2, re: 0, sd: -2, st: 0 },
        resists: { ph: 10, mt: 5, fe: 0, es: 0, ch: -5 },
        info: { hits: 25, encumbrance: 25, stride: 0, dp: 8, recM: 1 },
        averages: {
            M: { height: 180, weight: 90.7 },
            F: { height: 170, weight: 72.6 }
        }
    },
    'Sea-kral': {
        stats: { ag: 2, co: 3, em: -2, in: 1, me: -1, pr: -1, qu: 0, re: -1, sd: 1, st: 1 },
        resists: { ph: 10, mt: 0, fe: 0, es: 0, ch: 5 },
        info: { hits: 25, encumbrance: 10, stride: -0.9, dp: 3, recM: 1 },
        averages: {
            M: { height: 137, weight: 43.1 },
            F: { height: 130, weight: 38.6 }
        }
    },
    'Sibbicai': {
        stats: { ag: 1, co: 2, em: -3, in: 2, me: 0, pr: -1, qu: 0, re: 0, sd: -2, st: 2 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 25, encumbrance: 10, stride: 0, dp: 0, recM: 1 },
        averages: {
            M: { height: 185, weight: 90.7 },
            F: { height: 173, weight: 75.3 }
        }
    },
    'Sohleugir': {
        stats: { ag: 0, co: 3, em: 0, in: 0, me: -2, pr: -2, qu: 0, re: 0, sd: -2, st: 2 },
        resists: { ph: 0, mt: 0, fe: 0, es: -5, ch: 0 },
        info: { hits: 25, encumbrance: 10, stride: 0, dp: 2, recM: 1 },
        averages: {
            M: { height: 185, weight: 90.7 },
            F: { height: 185, weight: 90.7 }
        }
    },
    "Sstoi'isslythi": {
        stats: { ag: 2, co: 0, em: 1, in: 0, me: 0, pr: 1, qu: 2, re: 0, sd: 0, st: -1 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 20, encumbrance: 0, stride: 1.83, dp: 0, recM: 2 },
        averages: {
            M: { height: 170, weight: 54.4 },
            F: { height: 170, weight: 54.4 }
        }
    },
    'Troll': {
        stats: { ag: -1, co: 2, em: -5, in: 0, me: -3, pr: 0, qu: 0, re: -3, sd: -3, st: 5 },
        resists: { ph: 15, mt: -10, fe: 0, es: -10, ch: -10 },
        info: { hits: 25, encumbrance: 10, stride: 1.8, dp: 29, recM: 1 },
        averages: {
            M: { height: 274, weight: 362.9 },
            F: { height: 274, weight: 362.9 }
        }
    },
    'Vulfen': {
        stats: { ag: 0, co: 3, em: -3, in: 1, me: 0, pr: 0, qu: 2, re: -1, sd: -4, st: 2 },
        resists: { ph: 0, mt: 0, fe: 0, es: 0, ch: 0 },
        info: { hits: 30, encumbrance: 10, stride: 0.3, dp: 0, recM: 1 },
        averages: {
            M: { height: 191, weight: 102.1 },
            F: { height: 175, weight: 86.2 }
        }
    },
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
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '4/6',
                    'Base': '4/6',
                    'Ritual Magic': '5/7',
                    'Closed': '7/10',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
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
            'Magical Expertise': '7/10',
            'Medical': '3/4',
            'Mental Discipline': '5/7',
            'Movement': '2/4',
            'Performance Art': '3/4',
            'Power Manipulation': '9/12',
            'Science': '5/7',
            'Social': '2/4',
            'Subterfuge': '3/5',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
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
            'Magical Expertise': '7/10',
            'Medical': '4/6',
            'Mental Discipline': '2/3',
            'Movement': '1/2',
            'Performance Art': '3/4',
            'Power Manipulation': '9/12',
            'Science': '5/7',
            'Social': '3/4',
            'Subterfuge': '2/4',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
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
            'Magical Expertise': '7/10',
            'Medical': '3/4',
            'Mental Discipline': '4/6',
            'Movement': '1/3',
            'Performance Art': '2/3',
            'Power Manipulation': '9/12',
            'Science': '4/6',
            'Social': '1/3',
            'Subterfuge': '1/2',
            'Technical': '1/2',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
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
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
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
            'Magical Expertise': '7/10',
            'Medical': '2/4',
            'Mental Discipline': '4/6',
            'Movement': '1/3',
            'Performance Art': '2/3',
            'Power Manipulation': '9/12',
            'Science': '4/6',
            'Social': '2/3',
            'Subterfuge': '3/4',
            'Technical': '2/3',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '7/10',
                    'Base': '7/10',
                    'Ritual Magic': '9/12',
                    'Closed': '15/20',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
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
            'Magical Expertise': '4/6',
            'Medical': '1/3',
            'Mental Discipline': '1/3',
            'Movement': '3/5',
            'Performance Art': '1/3',
            'Power Manipulation': '4/6',
            'Science': '1/3',
            'Social': '2/3',
            'Subterfuge': '4/6',
            'Technical': '2/4',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '4/6',
                    'Base': '4/6',
                    'Ritual Magic': '5/7',
                    'Closed': '7/10',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
                }
            }
        }
    },
    'Clérigo': {
        costs: {
            'Animal': '3/4',
            'Awareness': '4/6',
            'Battle Expertise': '5/7',
            'Body Discipline': '6/8',
            'Brawn': '5/7',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '3/4',
            'Environmental': '3/5',
            'Gymnastic': '4/6',
            'Lore': '2/3',
            'Magical Expertise': '2/3',
            'Medical': '2/4',
            'Mental Discipline': '3/4',
            'Movement': '3/5',
            'Performance Art': '2/3',
            'Power Manipulation': '2/4',
            'Science': '3/4',
            'Social': '1/3',
            'Subterfuge': '6/8',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/2',
                    'Base': '1/2',
                    'Ritual Magic': '1/3',
                    'Closed': '2/4',
                    'Arcane': '5/7',
                    'Restricted': '6/8',
                }
            }
        }
    },
    'Druida': {
        costs: {
            'Animal': '1/2',
            'Awareness': '3/4',
            'Battle Expertise': '7/10',
            'Body Discipline': '6/8',
            'Brawn': '5/7',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '4/6',
            'Environmental': '1/3',
            'Gymnastic': '4/6',
            'Lore': '2/3',
            'Magical Expertise': '3/4',
            'Medical': '2/4',
            'Mental Discipline': '3/4',
            'Movement': '3/5',
            'Performance Art': '3/4',
            'Power Manipulation': '2/4',
            'Science': '3/5',
            'Social': '3/4',
            'Subterfuge': '4/6',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/2',
                    'Base': '1/2',
                    'Ritual Magic': '1/3',
                    'Closed': '2/4',
                    'Arcane': '5/7',
                    'Restricted': '6/8',
                }
            }
        }
    },
    'Mago': {
        costs: {
            'Animal': '3/5',
            'Awareness': '4/6',
            'Battle Expertise': '7/10',
            'Body Discipline': '6/8',
            'Brawn': '6/8',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '2/4',
            'Crafting': '3/4',
            'Delving': '1/2',
            'Environmental': '4/6',
            'Gymnastic': '4/6',
            'Lore': '1/3',
            'Magical Expertise': '1/2',
            'Medical': '3/4',
            'Mental Discipline': '2/4',
            'Movement': '4/6',
            'Performance Art': '2/4',
            'Power Manipulation': '2/3',
            'Science': '2/4',
            'Social': '3/4',
            'Subterfuge': '6/8',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/2',
                    'Base': '1/2',
                    'Ritual Magic': '1/3',
                    'Closed': '2/4',
                    'Arcane': '5/7',
                    'Restricted': '6/8',
                }
            }
        }
    },
    'Ilusionista': {
        costs: {
            'Animal': '4/6',
            'Awareness': '2/4',
            'Battle Expertise': '7/10',
            'Body Discipline': '6/8',
            'Brawn': '6/8',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '1/3',
            'Crafting': '3/4',
            'Delving': '1/2',
            'Environmental': '4/6',
            'Gymnastic': '4/6',
            'Lore': '1/3',
            'Magical Expertise': '1/2',
            'Medical': '4/6',
            'Mental Discipline': '3/5',
            'Movement': '4/6',
            'Performance Art': '1/3',
            'Power Manipulation': '2/3',
            'Science': '3/4',
            'Social': '3/4',
            'Subterfuge': '4/6',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/2',
                    'Base': '1/2',
                    'Ritual Magic': '1/3',
                    'Closed': '2/4',
                    'Arcane': '5/7',
                    'Restricted': '6/8',
                }
            }
        }
    },
    'Mentalista': {
        costs: {
            'Animal': '4/6',
            'Awareness': '3/5',
            'Battle Expertise': '7/10',
            'Body Discipline': '4/6',
            'Brawn': '6/8',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '2/4',
            'Environmental': '4/6',
            'Gymnastic': '4/6',
            'Lore': '2/3',
            'Magical Expertise': '1/3',
            'Medical': '3/5',
            'Mental Discipline': '1/2',
            'Movement': '4/6',
            'Performance Art': '3/4',
            'Power Manipulation': '2/3',
            'Science': '3/4',
            'Social': '1/3',
            'Subterfuge': '5/7',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/2',
                    'Base': '1/2',
                    'Ritual Magic': '1/3',
                    'Closed': '2/4',
                    'Arcane': '5/7',
                    'Restricted': '6/8',
                }
            }
        }
    },
    'Curandeiro Leigo': {
        costs: {
            'Animal': '3/4',
            'Awareness': '4/6',
            'Battle Expertise': '7/10',
            'Body Discipline': '4/6',
            'Brawn': '5/7',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '2/3',
            'Environmental': '4/6',
            'Gymnastic': '4/6',
            'Lore': '2/3',
            'Magical Expertise': '2/4',
            'Medical': '1/2',
            'Mental Discipline': '2/4',
            'Movement': '3/5',
            'Performance Art': '3/4',
            'Power Manipulation': '2/3',
            'Science': '3/4',
            'Social': '2/3',
            'Subterfuge': '6/8',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/2',
                    'Base': '1/2',
                    'Ritual Magic': '1/3',
                    'Closed': '2/4',
                    'Arcane': '5/7',
                    'Restricted': '6/8',
                }
            }
        }
    },
    'Curandeiro': {
        costs: {
            'Animal': '3/5',
            'Awareness': '4/6',
            'Battle Expertise': '7/10',
            'Body Discipline': '5/7',
            'Brawn': '1/3',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '4/6',
            'Environmental': '4/6',
            'Gymnastic': '4/6',
            'Lore': '2/3',
            'Magical Expertise': '2/3',
            'Medical': '1/2',
            'Mental Discipline': '2/4',
            'Movement': '4/6',
            'Performance Art': '3/4',
            'Power Manipulation': '2/4',
            'Science': '4/6',
            'Social': '2/4',
            'Subterfuge': '6/8',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/3',
                    'Base': '1/3',
                    'Ritual Magic': '2/3',
                    'Closed': '3/4',
                    'Arcane': '4/6',
                    'Restricted': '7/10',
                }
            }
        }
    },
    'Místico': {
        costs: {
            'Animal': '4/6',
            'Awareness': '2/4',
            'Battle Expertise': '7/10',
            'Body Discipline': '6/8',
            'Brawn': '6/8',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '3/5',
            'Environmental': '4/6',
            'Gymnastic': '3/5',
            'Lore': '2/3',
            'Magical Expertise': '3/4',
            'Medical': '4/6',
            'Mental Discipline': '2/4',
            'Movement': '3/5',
            'Performance Art': '2/4',
            'Power Manipulation': '2/4',
            'Science': '4/6',
            'Social': '2/3',
            'Subterfuge': '3/4',
            'Technical': '3/5',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/3',
                    'Base': '1/3',
                    'Ritual Magic': '2/3',
                    'Closed': '3/4',
                    'Arcane': '4/6',
                    'Restricted': '7/10',
                }
            }
        }
    },
    'Feiticeiro': {
        costs: {
            'Animal': '4/6',
            'Awareness': '4/6',
            'Battle Expertise': '7/10',
            'Body Discipline': '6/8',
            'Brawn': '6/8',
            'Combat Expertise': '7/10',
            'Combat': 'Vária',
            'Composition': '2/4',
            'Crafting': '3/4',
            'Delving': '1/3',
            'Environmental': '3/5',
            'Gymnastic': '4/6',
            'Lore': '1/3',
            'Magical Expertise': '1/2',
            'Medical': '2/4',
            'Mental Discipline': '2/4',
            'Movement': '4/6',
            'Performance Art': '3/4',
            'Power Manipulation': '2/4',
            'Science': '3/4',
            'Social': '2/3',
            'Subterfuge': '6/8',
            'Technical': '3/5',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '1/3',
                    'Base': '1/3',
                    'Ritual Magic': '2/3',
                    'Closed': '3/4',
                    'Arcane': '4/6',
                    'Restricted': '7/10',
                }
            }
        }
    },
    'Patrulheiro': {
        costs: {
            'Animal': '1/3',
            'Awareness': '1/3',
            'Battle Expertise': '4/6',
            'Body Discipline': '6/8',
            'Brawn': '4/6',
            'Combat Expertise': '3/5',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '2/4',
            'Delving': '6/8',
            'Environmental': '1/3',
            'Gymnastic': '3/4',
            'Lore': '2/4',
            'Magical Expertise': '6/8',
            'Medical': '3/5',
            'Mental Discipline': '5/7',
            'Movement': '1/3',
            'Performance Art': '3/4',
            'Power Manipulation': '4/6',
            'Science': '5/7',
            'Social': '3/4',
            'Subterfuge': '2/4',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '3/4',
                    'Base': '3/4',
                    'Ritual Magic': '3/5',
                    'Closed': '5/7',
                    'Arcane': '12/15',
                    'Restricted': '15/20',
                }
            }
        }
    },
    'Paladino': {
        costs: {
            'Animal': '2/3',
            'Awareness': '3/5',
            'Battle Expertise': '2/3',
            'Body Discipline': '5/7',
            'Brawn': '2/4',
            'Combat Expertise': '3/5',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '2/4',
            'Delving': '6/8',
            'Environmental': '3/5',
            'Gymnastic': '2/4',
            'Lore': '2/4',
            'Magical Expertise': '3/5',
            'Medical': '4/6',
            'Mental Discipline': '5/7',
            'Movement': '2/3',
            'Performance Art': '3/4',
            'Power Manipulation': '4/6',
            'Science': '5/7',
            'Social': '2/3',
            'Subterfuge': '4/6',
            'Technical': '5/7',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '3/5',
                    'Base': '3/5',
                    'Ritual Magic': '4/6',
                    'Closed': '6/8',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
                }
            }
        }
    },
    'Monge': {
        costs: {
            'Animal': '3/5',
            'Awareness': '3/4',
            'Battle Expertise': '6/8',
            'Body Discipline': '2/4',
            'Brawn': '4/6',
            'Combat Expertise': '2/4',
            'Combat': 'Vária',
            'Composition': '3/4',
            'Crafting': '3/4',
            'Delving': '5/7',
            'Environmental': '2/4',
            'Gymnastic': '2/3',
            'Lore': '2/3',
            'Magical Expertise': '6/8',
            'Medical': '3/4',
            'Mental Discipline': '4/6',
            'Movement': '1/3',
            'Performance Art': '3/4',
            'Power Manipulation': '4/6',
            'Science': '5/7',
            'Social': '3/4',
            'Subterfuge': '3/5',
            'Technical': '4/6',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '3/5',
                    'Base': '3/5',
                    'Ritual Magic': '4/6',
                    'Closed': '6/8',
                    'Arcane': '15/20',
                    'Restricted': '15/20',
                }
            }
        }
    },
    'Magent': {
        costs: {
            'Animal': '3/5',
            'Awareness': '2/3',
            'Battle Expertise': '3/5',
            'Body Discipline': '4/6',
            'Brawn': '5/7',
            'Combat Expertise': '3/5',
            'Combat': 'Vária',
            'Composition': '7/10',
            'Crafting': '3/4',
            'Delving': '6/8',
            'Environmental': '3/5',
            'Gymnastic': '2/4',
            'Lore': '2/4',
            'Magical Expertise': '5/7',
            'Medical': '3/5',
            'Mental Discipline': '3/5',
            'Movement': '2/3',
            'Performance Art': '3/4',
            'Power Manipulation': '3/5',
            'Science': '5/7',
            'Social': '2/3',
            'Subterfuge': '2/3',
            'Technical': '4/6',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '3/4',
                    'Base': '3/4',
                    'Ritual Magic': '3/5',
                    'Closed': '5/7',
                    'Arcane': '12/15',
                    'Restricted': '15/20',
                }
            }
        }
    },
    'Bardo': {
        costs: {
            'Animal': '3/5',
            'Awareness': '2/4',
            'Battle Expertise': '4/6',
            'Body Discipline': '6/8',
            'Brawn': '5/7',
            'Combat Expertise': '4/6',
            'Combat': 'Vária',
            'Composition': '1/3',
            'Crafting': '2/4',
            'Delving': '3/5',
            'Environmental': '3/5',
            'Gymnastic': '3/5',
            'Lore': '1/2',
            'Magical Expertise': '4/6',
            'Medical': '3/5',
            'Mental Discipline': '5/7',
            'Movement': '3/5',
            'Performance Art': '1/3',
            'Power Manipulation': '3/5',
            'Science': '3/5',
            'Social': '2/3',
            'Subterfuge': '4/6',
            'Technical': '4/6',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '2/4',
                    'Base': '2/4',
                    'Ritual Magic': '3/4',
                    'Closed': '4/6',
                    'Arcane': '9/12',
                    'Restricted': '12/15',
                }
            }
        }
    },
    'Amador': {
        costs: {
            'Animal': '4/6',
            'Awareness': '1/3',
            'Battle Expertise': '5/7',
            'Body Discipline': '6/8',
            'Brawn': '5/7',
            'Combat Expertise': '4/6',
            'Combat': 'Vária',
            'Composition': '2/4',
            'Crafting': '3/4',
            'Delving': '2/3',
            'Environmental': '3/5',
            'Gymnastic': '3/5',
            'Lore': '2/3',
            'Magical Expertise': '3/5',
            'Medical': '3/5',
            'Mental Discipline': '5/7',
            'Movement': '3/4',
            'Performance Art': '2/4',
            'Power Manipulation': '3/5',
            'Science': '5/7',
            'Social': '2/3',
            'Subterfuge': '2/4',
            'Technical': '2/3',
            'Vocation': '3/4',
        },
        spells_cost: {
            'Spells': {
                'Vária': {
                    'Open': '3/4',
                    'Base': '3/4',
                    'Ritual Magic': '3/5',
                    'Closed': '5/7',
                    'Arcane': '12/15',
                    'Restricted': '15/20',
                }
            }
        }
    },
};

export const CULTURES = [
    'Cosmopolita', 'Marítima', 'Nômade', 'Rural', 'Saqueadora', 'Severa', 'Silvestre', 'Subterrânea', 'Terras Altas', 'Urbana'
];