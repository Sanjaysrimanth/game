class Character {
    constructor(name, gender, characterClass) {
        this.name = name;
        this.gender = gender;
        this.characterClass = characterClass;
        this.stats = {
            health: 100,
            mana: 100,
            strength: 10,
            agility: 10,
            intelligence: 10
        };
        this.skills = this.initializeSkills(characterClass);
    }

    initializeSkills(characterClass) {
        const skills = {
            warrior: ['Slash', 'Shield Block'],
            healer: ['Heal', 'Revive'],
            tank: ['Taunt', 'Shield Wall'],
            archer: ['Arrow Shot', 'Dodge'],
            assassin: ['Backstab', 'Stealth']
        };
        return skills[characterClass] || [];
    }

    updateStats(stat, value) {
        if (this.stats.hasOwnProperty(stat)) {
            this.stats[stat] += value;
        }
    }

    displayCharacterInfo() {
        return {
            name: this.name,
            gender: this.gender,
            class: this.characterClass,
            stats: this.stats,
            skills: this.skills
        };
    }
}