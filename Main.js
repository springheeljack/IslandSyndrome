var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("Boilerplate/Enums/Align", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Align = void 0;
    var Align;
    (function (Align) {
        Align[Align["Default"] = 0] = "Default";
        Align[Align["TopLeft"] = 1] = "TopLeft";
        Align[Align["Top"] = 2] = "Top";
        Align[Align["TopRight"] = 3] = "TopRight";
        Align[Align["Left"] = 4] = "Left";
        Align[Align["Center"] = 5] = "Center";
        Align[Align["Right"] = 6] = "Right";
        Align[Align["BottomLeft"] = 7] = "BottomLeft";
        Align[Align["Bottom"] = 8] = "Bottom";
        Align[Align["BottomRight"] = 9] = "BottomRight";
    })(Align = exports.Align || (exports.Align = {}));
});
define("Boilerplate/Enums/Fonts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fonts = void 0;
    var Fonts;
    (function (Fonts) {
        Fonts["Arial"] = "Arial";
        Fonts["LucidaConsole"] = "Lucida Console";
    })(Fonts = exports.Fonts || (exports.Fonts = {}));
});
define("Boilerplate/Classes/Colour", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Colour = void 0;
    var Colour = /** @class */ (function () {
        function Colour(r, g, b) {
            this.r = this.boundValue(r);
            this.g = this.boundValue(g);
            this.b = this.boundValue(b);
            this.setHexString();
        }
        Colour.prototype.getR = function () { return this.r; };
        Colour.prototype.getG = function () { return this.g; };
        Colour.prototype.getB = function () { return this.b; };
        Colour.prototype.getHexString = function () { return this.hexString; };
        Colour.prototype.setHexString = function () {
            var rHex = this.r.toString(16);
            var gHex = this.g.toString(16);
            var bHex = this.b.toString(16);
            this.hexString = '#';
            if (rHex.length === 1)
                this.hexString += '0';
            this.hexString += rHex;
            if (gHex.length === 1)
                this.hexString += '0';
            this.hexString += gHex;
            if (bHex.length === 1)
                this.hexString += '0';
            this.hexString += bHex;
        };
        Colour.prototype.boundValue = function (value) {
            if (value < 0)
                return 0;
            if (value > 255)
                return 255;
            return value;
        };
        return Colour;
    }());
    exports.Colour = Colour;
});
define("Boilerplate/Classes/Context2D", ["require", "exports", "Boilerplate/Enums/Align"], function (require, exports, Align_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HTMLCanvasElement.prototype.getContext2D = function () {
        return this.getContext("2d");
    };
    CanvasRenderingContext2D.prototype.drawString = function (text, x, y, size, font, colour, align) {
        this.fillStyle = colour.getHexString();
        this.setFont(font, size);
        this.setAlign(align);
        this.fillText(text, x, y);
    };
    CanvasRenderingContext2D.prototype.measureString = function (text, size, font, align) {
        this.setFont(font, size);
        this.setAlign(align);
        return this.measureText(text);
    };
    CanvasRenderingContext2D.prototype.drawFillRectangle = function (x, y, w, h, colour) {
        this.fillStyle = colour.getHexString();
        this.fillRect(x, y, w, h);
    };
    CanvasRenderingContext2D.prototype.drawStrokeRectangle = function (x, y, w, h, colour, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 2; }
        this.strokeStyle = colour.getHexString();
        this.lineWidth = lineWidth;
        this.strokeRect(x, y, w, h);
    };
    CanvasRenderingContext2D.prototype.drawBorderedRectangle = function (x, y, w, h, fillColour, borderColour, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 2; }
        this.drawFillRectangle(x, y, w, h, fillColour);
        this.drawStrokeRectangle(x, y, w, h, borderColour, lineWidth);
    };
    CanvasRenderingContext2D.prototype.setAlign = function (align) {
        if (align === Align_1.Align.Bottom
            || align === Align_1.Align.BottomLeft
            || align === Align_1.Align.BottomRight)
            this.textBaseline = "bottom";
        else if (align === Align_1.Align.Top
            || align === Align_1.Align.TopLeft
            || align === Align_1.Align.TopRight)
            this.textBaseline = "top";
        else
            this.textBaseline = "middle";
        if (align === Align_1.Align.Left
            || align === Align_1.Align.TopLeft
            || align === Align_1.Align.BottomLeft)
            this.textAlign = "left";
        else if (align === Align_1.Align.Right
            || align === Align_1.Align.TopRight
            || align === Align_1.Align.BottomRight)
            this.textAlign = "right";
        else
            this.textAlign = "center";
    };
    CanvasRenderingContext2D.prototype.setFont = function (font, size) {
        this.font = size + "px " + font;
    };
});
define("Boilerplate/Enums/Scroll", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scroll = void 0;
    var Scroll;
    (function (Scroll) {
        Scroll[Scroll["None"] = 1] = "None";
        Scroll[Scroll["Up"] = 2] = "Up";
        Scroll[Scroll["Down"] = 3] = "Down";
    })(Scroll = exports.Scroll || (exports.Scroll = {}));
});
define("Boilerplate/Classes/MouseState", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseState = void 0;
    var MouseState = /** @class */ (function () {
        function MouseState(x, y, left, right, scroll) {
            this.x = x;
            this.y = y;
            this.left = left;
            this.right = right;
            this.scroll = scroll;
        }
        return MouseState;
    }());
    exports.MouseState = MouseState;
});
define("Boilerplate/Enums/MouseButton", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseButton = void 0;
    var MouseButton;
    (function (MouseButton) {
        MouseButton[MouseButton["Left"] = 0] = "Left";
        MouseButton[MouseButton["Middle"] = 1] = "Middle";
        MouseButton[MouseButton["Right"] = 2] = "Right";
        MouseButton[MouseButton["Back"] = 3] = "Back";
        MouseButton[MouseButton["Forward"] = 4] = "Forward";
    })(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
});
define("Boilerplate/Classes/Vector2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector2 = void 0;
    var Vector2 = /** @class */ (function () {
        function Vector2() {
        }
        return Vector2;
    }());
    exports.Vector2 = Vector2;
});
define("Boilerplate/Classes/Input", ["require", "exports", "Boilerplate/Classes/MouseState", "Boilerplate/Enums/MouseButton", "Boilerplate/Classes/Vector2", "Boilerplate/Enums/Scroll"], function (require, exports, MouseState_1, MouseButton_1, Vector2_1, Scroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Input = void 0;
    var Input = /** @class */ (function () {
        function Input(canvas) {
            var _this = this;
            this.leftUsed = false;
            this.rightUsed = false;
            this.leftDownPosition = new Vector2_1.Vector2();
            this.rightDownPosition = new Vector2_1.Vector2();
            this.mouseStickiness = 32; //TODO: tweak this
            this.previousMouseState = new MouseState_1.MouseState(0, 0, false, false, Scroll_1.Scroll.None);
            this.currentMouseState = new MouseState_1.MouseState(0, 0, false, false, Scroll_1.Scroll.None);
            this.runningMouseState = new MouseState_1.MouseState(0, 0, false, false, Scroll_1.Scroll.None);
            canvas.addEventListener("mousedown", function (event) {
                if (event.button === MouseButton_1.MouseButton.Left) {
                    _this.runningMouseState.left = true;
                    _this.leftDownPosition.x = _this.runningMouseState.x;
                    _this.leftDownPosition.y = _this.runningMouseState.y;
                }
                else if (event.button === MouseButton_1.MouseButton.Right) {
                    _this.runningMouseState.right = true;
                    _this.rightDownPosition.x = _this.runningMouseState.x;
                    _this.rightDownPosition.y = _this.runningMouseState.y;
                }
            });
            canvas.addEventListener("mouseup", function (event) {
                if (event.button === MouseButton_1.MouseButton.Left) {
                    _this.runningMouseState.left = false;
                    _this.leftUsed = false;
                }
                else if (event.button === MouseButton_1.MouseButton.Right) {
                    _this.runningMouseState.right = false;
                    _this.rightUsed = false;
                }
            });
            canvas.addEventListener("mousemove", function (event) {
                var target = event.currentTarget;
                var rect = target.getBoundingClientRect();
                _this.runningMouseState.x = event.clientX - rect.left;
                _this.runningMouseState.y = event.clientY - rect.top;
            });
            canvas.addEventListener("contextmenu", function (event) { return event.preventDefault(); });
            canvas.addEventListener("wheel", function (event) {
                if (event.deltaY < 0)
                    _this.runningMouseState.scroll = Scroll_1.Scroll.Up;
                else if (event.deltaY > 0)
                    _this.runningMouseState.scroll = Scroll_1.Scroll.Down;
            });
        }
        Input.prototype.update = function () {
            this.previousMouseState = this.currentMouseState;
            this.currentMouseState = new MouseState_1.MouseState(this.runningMouseState.x, this.runningMouseState.y, this.runningMouseState.left, this.runningMouseState.right, this.runningMouseState.scroll);
            this.runningMouseState.scroll = Scroll_1.Scroll.None;
        };
        Input.prototype.getX = function () {
            return this.currentMouseState.x;
        };
        Input.prototype.getY = function () {
            return this.currentMouseState.y;
        };
        Input.prototype.getChangeX = function () {
            return this.currentMouseState.x - this.previousMouseState.x;
        };
        Input.prototype.getChangeY = function () {
            return this.currentMouseState.y - this.previousMouseState.y;
        };
        Input.prototype.getHasPositionChanged = function () {
            return Math.abs(this.getChangeX()) > this.mouseStickiness
                || Math.abs(this.getChangeY()) > this.mouseStickiness;
        };
        Input.prototype.getLeftUsed = function () {
            return this.leftUsed;
        };
        Input.prototype.getRightUsed = function () {
            return this.rightUsed;
        };
        Input.prototype.setLeftUsed = function () {
            this.leftUsed = true;
        };
        Input.prototype.setRightUsed = function () {
            this.rightUsed = true;
        };
        Input.prototype.getLeftDownPosition = function () {
            return this.leftDownPosition;
        };
        Input.prototype.getRightDownPosition = function () {
            return this.rightDownPosition;
        };
        Input.prototype.getHasLeftDownPositionChanged = function () {
            return Math.abs(this.leftDownPosition.x - this.currentMouseState.x) > this.mouseStickiness
                || Math.abs(this.leftDownPosition.y - this.currentMouseState.y) > this.mouseStickiness;
        };
        Input.prototype.getHasRightDownPositionChanged = function () {
            return this.rightDownPosition.x !== this.currentMouseState.x
                || this.rightDownPosition.y !== this.currentMouseState.y;
        };
        Input.prototype.isUp = function (mouseButton) {
            if (mouseButton === MouseButton_1.MouseButton.Left)
                return !this.currentMouseState.left;
            if (mouseButton === MouseButton_1.MouseButton.Right)
                return !this.currentMouseState.right;
            return false;
        };
        Input.prototype.isDown = function (mouseButton) {
            if (mouseButton === MouseButton_1.MouseButton.Left)
                return this.currentMouseState.left;
            if (mouseButton === MouseButton_1.MouseButton.Right)
                return this.currentMouseState.right;
            return false;
        };
        Input.prototype.isClicked = function (mouseButton) {
            if (mouseButton === MouseButton_1.MouseButton.Left)
                return this.currentMouseState.left && !this.previousMouseState.left;
            if (mouseButton === MouseButton_1.MouseButton.Right)
                return this.currentMouseState.right && !this.previousMouseState.right;
            return false;
        };
        Input.prototype.isReleased = function (mouseButton) {
            if (mouseButton === MouseButton_1.MouseButton.Left)
                return !this.currentMouseState.left && this.previousMouseState.left;
            if (mouseButton === MouseButton_1.MouseButton.Right)
                return !this.currentMouseState.right && this.previousMouseState.right;
            return false;
        };
        Input.prototype.getScroll = function () {
            return this.currentMouseState.scroll;
        };
        return Input;
    }());
    exports.Input = Input;
});
define("Game/Classes/Camera", ["require", "exports", "Boilerplate/Classes/Vector2", "Boilerplate/Enums/MouseButton", "Boilerplate/Enums/Scroll"], function (require, exports, Vector2_2, MouseButton_2, Scroll_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Camera = void 0;
    var Camera = /** @class */ (function () {
        function Camera() {
            this.position = new Vector2_2.Vector2();
            this.zoomLevel = 2;
            this.zoomLevels = [0.5, 0.75, 1, 1.5, 2, 3];
            this.cameraStuck = true;
            this.updateZoom();
        }
        Camera.prototype.getWorldToCameraOffset = function (position) {
            var offset = new Vector2_2.Vector2();
            offset.x = (position.x - this.position.x) * this.zoom;
            offset.y = (position.y - this.position.y) * this.zoom;
            return offset;
        };
        Camera.prototype.getCameraToWorldOffset = function (position) {
            var offset = new Vector2_2.Vector2();
            offset.x = this.position.x + position.x / this.zoom;
            offset.y = this.position.y + position.y / this.zoom;
            return offset;
        };
        Camera.prototype.update = function (input) {
            if (input.isDown(MouseButton_2.MouseButton.Left) && (!this.cameraStuck || input.getHasLeftDownPositionChanged())) {
                this.position.x -= input.getChangeX() / this.zoom;
                this.position.y -= input.getChangeY() / this.zoom;
                this.cameraStuck = false;
            }
            else {
                this.cameraStuck = true;
            }
            var scroll = input.getScroll();
            if (scroll === Scroll_2.Scroll.Up) {
                this.zoomLevel = Math.min(this.zoomLevel + 1, this.zoomLevels.length - 1);
            }
            else if (scroll === Scroll_2.Scroll.Down) {
                this.zoomLevel = Math.max(this.zoomLevel - 1, 0);
            }
            if (scroll !== Scroll_2.Scroll.None) {
                var screenPosition = new Vector2_2.Vector2();
                screenPosition.x = input.getX();
                screenPosition.y = input.getY();
                var worldPosition = this.getCameraToWorldOffset(screenPosition);
                this.updateZoom();
                this.alignScreenAndWorld(screenPosition, worldPosition);
            }
        };
        Camera.prototype.centerOnPosition = function (position, canvas) {
            this.position.x = position.x - (canvas.width / 2 / this.zoom);
            this.position.y = position.y - (canvas.height / 2 / this.zoom);
        };
        Camera.prototype.alignScreenAndWorld = function (screenPosition, worldPosition) {
            this.position.x = -((screenPosition.x / this.zoom) - worldPosition.x);
            this.position.y = -((screenPosition.y / this.zoom) - worldPosition.y);
        };
        Camera.prototype.updateZoom = function () {
            this.zoom = this.zoomLevels[this.zoomLevel];
        };
        Camera.prototype.getZoom = function () {
            return this.zoom;
        };
        return Camera;
    }());
    exports.Camera = Camera;
});
define("Boilerplate/Classes/Images", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Images = void 0;
    var Images = /** @class */ (function () {
        function Images(imageContainerElementId) {
            this.images = {};
            this.imageContainerElement = document.getElementById(imageContainerElementId);
        }
        Images.prototype.getImage = function (path) {
            if (this.images[path] == undefined) {
                console.log('loading image');
                var image = new Image();
                image.src = "images/" + path + ".png";
                this.imageContainerElement.append(image);
                this.images[path] = image;
            }
            console.log(this.images[path]);
            return this.images[path];
        };
        return Images;
    }());
    exports.Images = Images;
});
define("Boilerplate/Classes/GameBase", ["require", "exports", "Boilerplate/Classes/Images", "Boilerplate/Classes/Input"], function (require, exports, Images_1, Input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameBase = void 0;
    var GameBase = /** @class */ (function () {
        function GameBase() {
            var _this = this;
            this.canvas = document.getElementById("gameCanvas");
            this.context = this.canvas.getContext2D();
            this.input = new Input_1.Input(this.canvas);
            this.images = new Images_1.Images("images");
            this.updateWindowSize();
            window.addEventListener("resize", function () { return _this.updateWindowSize(); });
        }
        GameBase.prototype.run = function () {
            this.initialize();
            this.startUpdating();
            this.startDrawing();
        };
        GameBase.prototype.baseUpdate = function () {
            this.input.update();
            this.update();
        };
        GameBase.prototype.baseDraw = function () {
            this.context.clearRect(0, 0, this.windowWidth, this.windowHeight);
            this.draw();
        };
        GameBase.prototype.startUpdating = function () {
            var _this = this;
            setInterval(function () { return _this.baseUpdate(); }, GameBase.updateInterval);
        };
        GameBase.prototype.startDrawing = function () {
            var _this = this;
            setInterval(function () { return _this.baseDraw(); }, GameBase.drawInterval);
        };
        GameBase.prototype.updateWindowSize = function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        };
        GameBase.updatesPerSecond = 60;
        GameBase.drawsPerSecond = 60;
        GameBase.updateInterval = 1000 / 60;
        GameBase.drawInterval = 1000 / 60;
        GameBase.updateTime = 1 / 60;
        GameBase.drawTime = 1 / 60;
        return GameBase;
    }());
    exports.GameBase = GameBase;
});
define("Game/Enums/ImagePaths", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImagePaths = void 0;
    var ImagePaths;
    (function (ImagePaths) {
        ImagePaths["Test"] = "test";
    })(ImagePaths = exports.ImagePaths || (exports.ImagePaths = {}));
});
define("Game/Classes/Game", ["require", "exports", "Game/Classes/Camera", "Boilerplate/Classes/GameBase", "Game/Enums/ImagePaths"], function (require, exports, Camera_1, GameBase_1, ImagePaths_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Game.prototype.initialize = function () {
            this.context.imageSmoothingEnabled = false;
            this.camera = new Camera_1.Camera();
        };
        Game.prototype.update = function () {
        };
        Game.prototype.draw = function () {
            console.log('in here');
            this.context.drawImage(this.images.getImage(ImagePaths_1.ImagePaths.Test), 200, 100);
            debugger;
        };
        return Game;
    }(GameBase_1.GameBase));
    exports.Game = Game;
});
define("Main", ["require", "exports", "Game/Classes/Game", "Boilerplate/Classes/Context2D"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var game = new Game_1.Game();
    game.run();
});
define("Boilerplate/Functions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomInt = exports.createMultidimensionalArray = exports.pointWithinRectangle = void 0;
    function pointWithinRectangle(px, py, rx, ry, rw, rh) {
        return px >= rx
            && px <= rx + rw
            && py >= ry
            && py <= ry + rh;
    }
    exports.pointWithinRectangle = pointWithinRectangle;
    function createMultidimensionalArray(width, height, defaultValue) {
        var multiArray = [];
        for (var x = 0; x < width; x++) {
            var array = [];
            for (var y = 0; y < height; y++) {
                array.push(defaultValue);
            }
            multiArray.push(array);
        }
        return multiArray;
    }
    exports.createMultidimensionalArray = createMultidimensionalArray;
    function randomInt(lower, upper) {
        var difference = (upper + 1) - lower;
        var random = Math.random() * difference;
        return Math.ceil(random + lower) - 1;
    }
    exports.randomInt = randomInt;
});
define("Game/Classes/Colours", ["require", "exports", "Boilerplate/Classes/Colour"], function (require, exports, Colour_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Colours = void 0;
    var Colours = /** @class */ (function () {
        function Colours() {
        }
        Colours.red = new Colour_1.Colour(255, 0, 0);
        Colours.yellow = new Colour_1.Colour(255, 255, 0);
        Colours.green = new Colour_1.Colour(0, 255, 0);
        Colours.cyan = new Colour_1.Colour(0, 255, 255);
        Colours.blue = new Colour_1.Colour(0, 0, 255);
        Colours.magenta = new Colour_1.Colour(255, 0, 255);
        return Colours;
    }());
    exports.Colours = Colours;
});
//# sourceMappingURL=Main.js.map