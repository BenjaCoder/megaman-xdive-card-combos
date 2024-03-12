window.onload = () => {
    const b1 = document.getElementById("b1");
    b1.addEventListener("click", () => {
        let s = "";
        for (let i = 0; i < data.length; i++) {
            s += `${data[i].effect1.length > 0 ? data[i].effect1[0] : "n/a"}<br />`
        }
        document.write(s)
    });
}

class Card {
    constructor(number, name, rank, color, effect1, effect2) {
        this.number = number;
        this.name = name;
        this.rank = rank;
        this.color = color;
        this.effect1 = effect1;
        this.effect2 = effect2;
    }
}

const data = [
    new Card(1, "Refleczor", "B", "Red", [], []),
    new Card(2, "Mad Pecker", "B", "Red", [], []),
    new Card(3, "Crablaster", "B", "Red", [], []),
    new Card(4, "Batton M-501", "B", "Red",
        ["Gain life energy equal to 6%(→8%) of your attack once every 10 seconds when you defeat target with a weapon or skill.", "Red", "Green"], []),
    new Card(5, "Mettal C-15", "B", "Yellow", [], []),
    new Card(6, "Earth Commander", "B", "Yellow", [], []),
    new Card(7, "Garakuta Robot", "B", "Yellow", [], []),
    new Card(8, "Jelly Seeker", "B", "Yellow",
        ["20%(→30%) chance to become immune to effects of Immobilize.", "Yellow", "Blue"], []),
    new Card(9, "Ball de Voux", "B", "Blue", [], []),
    new Card(10, "Barrier Attacker", "B", "Blue", [], []),
    new Card(11, "Axe Man", "B", "Blue", [], []),
    new Card(12, "Notor Banger", "B", "Blue",
        ["20%(→30%) chance to become immune to effects of Damage Reduction.", "Blue", "Red"], []),
    new Card(13, "Dig Labour", "B", "Green", [], []),
    new Card(14, "Pararoid R-5", "B", "Green", [], []),
    new Card(15, "Hoganmer", "B", "Green", [], []),
    new Card(16, "Victoroid", "B", "Green",
        ["Increases the damage by 4%(→6%) when equipping a Buster.", "Green", "Yellow"], []),
    new Card(17, "Charge Shot (X)", "B", "Blue",
        ["The preparation time of the Charge Shot is reduced by 20%(→30%). When you equip more than 1 copy of a card, only the card in the right most slot will be activated.", "X"],
        ["20%(→30%) chance to become immune to effects of Immobilize.", "Blue", "Red", "Yellow"]),
    new Card(18, "X", "B", "Red",
        ["Increases the effect of Buster Mastery by 20%(→30%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.", "X"],
        ["Reduced damage taken by 4%(→6%) when equipping a buster.", "Red", "Blue", "Yellow"]),
    new Card(19, "Strafing Barrage", "B", "Blue",
        ["Increases the damage rate of the Strafing Barrage by 5%(→10%). When you equip more than 1 copy of this card, only the card in the right most slot will be activated.", "Axl"],
        ["Reduce damage taken by 4%(→6%) when equipping a machine gun.", "Blue", "Red", "Green"]),
];