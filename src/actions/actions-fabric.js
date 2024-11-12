import ChessGameHandler from "./chess.js";
import DockAsker from "./dock-asker.js";
import GhostwriterHandler from "./ghostwriter.js";
import RedditHandler from "./reddit.js";
import ImagegenHandler from "./imagegen.js";

class ActionFabric {
    /**
     * @description Abstract class for actions
     * @constructor ActionFabric
     * @returns {void}
     */

    constructor() {
        if (new.target === ActionFabric) {
            throw new TypeError("Cannot construct ActionFabric instances directly");
        }
    }

    /**
     * @description Create action
     * @param {'dockasker' | "reddit" | "chess" | "imagegen" | "ghostwriter"} actionName
     * @returns {DockAsker | RedditHandler | ChessGameHandler | ImagegenHandler | GhostwriterHandler}
     */
    static createAction(actionName) {
        const args = [this.bot, this.anthropic, this.sendMenu, this.openai];
        if (actionName === "dockasker") {
            return new DockAsker(...args);
        }
        if (actionName === "reddit") {
            return new RedditHandler(...args);
        }
        if (actionName === "chess") {
            return new ChessGameHandler(...args);
        }
        if (actionName === "ghostwriter") {
            return new GhostwriterHandler(...args);
        }
        if (actionName === "imagegen") {
            return new ImagegenHandler(this.bot, this.sendMenu);
        }
    }
}

export default ActionFabric;
