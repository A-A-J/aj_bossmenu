import { setText, setImage } from '../functions/format.js';

export function loadMemberData(data) {
    setText('.profile h3', data.player.name);
    setText('.profile span', data.player.grade);
    setText('.worktime span', data.player.workTime);

    setImage('.profile img', data.player.avatar);
}
