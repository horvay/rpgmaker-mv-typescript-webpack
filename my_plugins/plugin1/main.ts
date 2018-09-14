/// <reference types="rpgmakermv_typescript_dts" />

import { MyPlugin } from "./myPlugin";

const old_initialize = Game_Interpreter.prototype.initialize;

class exInterpreter extends Game_Interpreter {
    public myPlugin1: MyPlugin
    public initialize(depth) {
        old_initialize.call(this, depth);
        this.myPlugin1 = new MyPlugin();
    }
}

Game_Interpreter.prototype = exInterpreter.prototype;
