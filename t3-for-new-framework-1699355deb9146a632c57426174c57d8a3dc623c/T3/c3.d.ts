// NOTE: This definition file is auto generated - any changes you make will not be saved
// 2022/3/7 下午10:19:53

declare function runOnStartup(cb: (runtime: IRuntime) => void): void;

declare interface IRuntime {
    objects: IRuntimeObjects;
    addEventListener(eventName: 'tick' | 'beforeprojectstart' | 'afterprojectstart' | 'keydown' | 'keyup'
        | 'mousedown' | 'mousemove' | 'mouseup' | 'dblclick' | 'wheel' | 'pointerdown' | 'pointermove'
        | 'pointercancel' | 'deviceorientation' | 'devicemotion' | 'save' | 'load' | 'instancecreate'
        | 'instancedestroy', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'tick' | 'beforeprojectstart' | 'afterprojectstart' | 'keydown' | 'keyup'
        | 'mousedown' | 'mousemove' | 'mouseup' | 'dblclick' | 'wheel' | 'pointerdown' | 'pointermove'
        | 'pointercancel' | 'deviceorientation' | 'devicemotion' | 'save' | 'load' | 'instancecreate'
        | 'instancedestroy', callback: (...params: unknown[]) => void): void;
    dt: number;
    gameTime: number;
    getInstanceByUid(uid: any): IInstance | undefined
    globalVars: IGlobalVars;
    mouse?: IMouseObjectType;
    keyboard?: IKeyboardObjectType;
    touch?: ITouchObjectType;
    layout: ILayout;
    getLayout(layoutNameOrIndex: string | number): ILayout;
    getAllLayouts(): Array<ILayout>;
    goToLayout(layoutNameOrIndex: string | number): void;
    assets: IAssetManager;
    storage: IStorage;
    callFunction(name: string, ...params: unknown[]): unknown;
    setReturnValue(...params: unknown[]): void;
    projectName: string;
    projectionVersion: string;
    random(): number;
    wallTime: number;
    sortZOrder<T>(iterable: Array<T>, callback: (a: T, b: T) => boolean): void;
    invokeDownload(url: string, filename: string): void;
    isInWorker: boolean;
    alert(message: string): Promise<void>;
}
declare var IRuntime:  { new(): IRuntime };

type VariableType = Record<string, string | boolean | number | null | undefined>;

interface IRuntimeObjects {
	['WordDucer']: IObjectClass<IWordDucer>;
	['we_wood_box']: IObjectClass<Iwe_wood_box>;
	['we_flower']: IObjectClass<Iwe_flower>;
	['wei_text']: IObjectClass<Iwei_text>;
	['wei_manager']: IObjectClass<Iwei_manager>;
	['wei_choose']: IObjectClass<Iwei_choose>;
	['wall']: IObjectClass<Iwall>;
	['Timeline']: IObjectClass<ITimeline>;
	['TerrorTrigger']: IObjectClass<ITerrorTrigger>;
	['talk_text']: IObjectClass<Italk_text>;
	['talk_bar']: IObjectClass<Italk_bar>;
	['storyT1Manager']: IObjectClass<IstoryT1Manager>;
	['SteleTerrorManager']: IObjectClass<ISteleTerrorManager>;
	['SpeechSynthesis']: IObjectClass<ISpeechSynthesis>;
	['skybox']: IObjectClass<Iskybox>;
	['ServersListText']: IObjectClass<IServersListText>;
	['ScriptReload']: IObjectClass<IScriptReload>;
	['ScreenHint']: IObjectClass<IScreenHint>;
	['Road']: IObjectClass<IRoad>;
	['PortalTrigger']: IObjectClass<IPortalTrigger>;
	['PlLine']: IObjectClass<IPlLine>;
	['PlainText']: IObjectClass<IPlainText>;
	['Pl']: IObjectClass<IPl>;
	['PathFindPoint']: IObjectClass<IPathFindPoint>;
	['NameEditBox']: IObjectClass<INameEditBox>;
	['Mouse']: IObjectClass<IMouse>;
	['Loginstatetext']: IObjectClass<ILoginstatetext>;
	['LobbyRoomNode']: IObjectClass<ILobbyRoomNode>;
	['level_c_map_choose_box']: IObjectClass<Ilevel_c_map_choose_box>;
	['level_c_map']: IObjectClass<Ilevel_c_map>;
	['level_c']: IObjectClass<Ilevel_c>;
	['LevelManager']: IObjectClass<ILevelManager>;
	['Keyboard']: IObjectClass<IKeyboard>;
	['JumpSoundTriger']: IObjectClass<IJumpSoundTriger>;
	['GraphText']: IObjectClass<IGraphText>;
	['GhostBase']: IObjectClass<IGhostBase>;
	['fpscam']: IObjectClass<Ifpscam>;
	['fog']: IObjectClass<Ifog>;
	['floor_5']: IObjectClass<Ifloor_5>;
	['floor_4']: IObjectClass<Ifloor_4>;
	['floor_3']: IObjectClass<Ifloor_3>;
	['floor_1']: IObjectClass<Ifloor_1>;
	['DoorMask']: IObjectClass<IDoorMask>;
	['DataManager']: IObjectClass<IDataManager>;
	['c_window_manager']: IObjectClass<Ic_window_manager>;
	['Characters_t_box']: IObjectClass<ICharacters_t_box>;
	['Characters_name']: IObjectClass<ICharacters_name>;
	['Charactersbase']: IObjectClass<ICharactersbase>;
	['car_storyt1']: IObjectClass<Icar_storyt1>;
	['CameraFlowPoint']: IObjectClass<ICameraFlowPoint>;
	['cam']: IObjectClass<Icam>;
	['Button']: IObjectClass<IButton>;
	['BUILD_MANEGER']: IObjectClass<IBUILD_MANEGER>;
	['BUILD_BOX']: IObjectClass<IBUILD_BOX>;
	['BottomPlate']: IObjectClass<IBottomPlate>;
	['Audio']: IObjectClass<IAudio>;
	['3DShape']: IObjectClass<I3DShape>;
	['TEST_BUILD']: IObjectClass<ITEST_BUILD>;
	['wall2']: IObjectClass<Iwall2>;
	['wall1']: IObjectClass<Iwall1>;
	['f_wall']: IObjectClass<If_wall>;
	['NPC']: IObjectClass<INPC>;
	['f_npc']: IObjectClass<If_npc>;
	['f_Ghost']: IObjectClass<If_Ghost>;
	['Tree']: IObjectClass<ITree>;
	['f_FaceCamera']: IObjectClass<If_FaceCamera>;
	['f_Door']: IObjectClass<If_Door>;
	['KuliPa']: IObjectClass<IKuliPa>;
	['Door']: IObjectClass<IDoor>;
	['f_DistanceFromPl']: IObjectClass<If_DistanceFromPl>;
	['car_storyt2']: IObjectClass<Icar_storyt2>;
	['PoliceCar']: IObjectClass<IPoliceCar>;
	['Man']: IObjectClass<IMan>;
	['RoadBlock']: IObjectClass<IRoadBlock>;
	['house2']: IObjectClass<Ihouse2>;
	['DancePeople']: IObjectClass<IDancePeople>;
	['house3']: IObjectClass<Ihouse3>;
	['house1']: IObjectClass<Ihouse1>;
	['f_3Dobjbect']: IObjectClass<If_3Dobjbect>;
}

interface IGlobalVars extends VariableType {
}

interface Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

interface IAssetManager {
    fetchText(url: string): Promise<string>;
    fetchJson(url: string): Promise<unknown>;
    fetchBlob(url: string): Promise<Blob>;
    fetchArrayBuffer(url: string): Promise<ArrayBuffer>;
    getProjectFileUrl(url: string): Promise<string>;
    getMediaFileUrl(url: string): Promise<string>;
    mediaFolder: string;
    isWebMOpusSupported: boolean;
    decodeWebMOpus(audioContext: unknown, arrayBuffer: ArrayBuffer): Promise<unknown>;
    loadScripts (...urls: Array<string>): Promise<void>;
    compileWebAssembly(url: string): Promise<unknown>;
}
declare var IAssetManager:  { new(): IAssetManager };

interface IStorage {
    getItem(key: string): Promise<string>;
    setItem(key: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    keys(): Promise<string[]>;
}
declare var IStorage:  { new(): IStorage };

interface ILayout {
    name: string;
    index: number;
    addEventListener(eventName: 'beforelayoutstart' | 'afterlayoutstart', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'beforelayoutstart' | 'afterlayoutstart', callback: (...params: unknown[]) => void): void;
    getLayer(layerNameOrIndex: string | number): ILayer;
    getAllLayers(): Array<ILayer>;
    width: number;
    height: number;
    scrollX: number;
    scrollY: number;
    scrollTo(x: number, y: number): void;
    scale: number;
    projection: 'perspective' | 'orthographic';
    setVanishingPoint(x: number, y: number): void;
    getVanishingPoint(): [number, number];
    effects: Array<IEffectInstance>;
}
declare var ILayout:  { new(): ILayout };

interface ILayer {
    name: string;
    index: number;
    layout: ILayout;
    isVisible: boolean;
    isTransparent: boolean;
    backgroundColor: [number, number, number];
    scrollX: number;
    scrollY: number;
    scrollTo(x: number, y: number): void;
    restoreScrollPosition(): void;
    parallaxX: number;
    parallaxY: number;
    opacity: number;
    scale: number;
    scaleRate: number;
    angle: number;
    zElevation: number;
    getViewport(): DOMRect;
    isForceOwnTexture: boolean;
    blendMode: 'normal' | 'additive' | 'copy' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop';
    effects: Array<IEffectInstance>;
    cssPxToLayer(clientX: number, clientY: number, z?: number): [number, number];
    layerToCssPx(clientX: number, clientY: number, z?: number): [number, number];
}
declare var ILayer:  { new(): ILayer };

interface IEffectInstance {
    index: number;
    name: string;
    isActive: boolean;
    setParamater(index: number, value: number | string | [number, number, number]): void;
    getParamater(index: number): number | string | [number, number, number];
}
declare var IEffectInstance:  { new(): IEffectInstance };

interface IMouseObjectType extends IObjectClass {
    getMouseX(layerNameOrIndex: string | number): number;
    getMouseY(layerNameOrIndex: string | number): number;
    getMousePosition(layerNameOrIndex: string | number): [number, number];
    isMouseButtonDown(button: 1 | 2 | 3): boolean;
}
declare var IMouseObjectType: undefined | { new(): IMouseObjectType };

interface IKeyboardObjectType extends IObjectClass {
    isKeyDown(keyStringOrWhich: number | string): boolean;
}

declare var IKeyboardObjectType: undefined | { new(): IKeyboardObjectType };

interface ITouchObjectType extends IObjectClass {
    requestPermission(type: string): Promise<string>;
}
declare var ITouchObjectType: undefined | { new(): ITouchObjectType };

interface IObjectClass<T = IInstance> {
    readonly name: string;
    addEventListener(eventName: 'instancecreate' | 'instancedestroy', callback: (e: Event & { instance: IInstance }) => void): void;
    removeEventListener(eventName: 'instancecreate' | 'instancedestroy', callback: (e: Event & { instance: IInstance }) => void): void;
    setInstanceClass(classType: { new(): unknown }): void;
    getAllInstances(): Array<T>
    getFirstInstance(): T | undefined
    intances(): Iterator<T>;
    getPickedInstances(): Array<T>
    getFirstPickedInstance(): T | undefined
    pickedInstances(): Iterator<T>;
    createInstance(layerNameOrIndex: string | number, x: number, y: number, createHierachy: boolean): T
}
declare var IObjectClass: { new(): IObjectClass };

interface IWordDucerVars extends VariableType {
	/**  **/
	['DisplayText']: string;
	/**  **/
	['NumberOfTriggers']: number;
	/**  **/
	['TriggersOnce']: boolean;
	/**  **/
	['MultilineDialogue']: boolean;
	/**  **/
	['MultilineDialogEvent']: string;
}
interface IWordDucerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IWordDucer extends ISpriteInstance {
	instVars: IWordDucerVars;
	behaviors: IWordDucerBehaviors;
}

interface Iwe_wood_boxVars extends VariableType {
	
}
interface Iwe_wood_boxBehaviors extends Record<string, IBehaviorInstance> {
	['旋转']: IBehaviorInstance
	['环绕']: IBehaviorInstance
}
interface Iwe_wood_box extends IWorldInstance {
	instVars: Iwe_wood_boxVars;
	behaviors: Iwe_wood_boxBehaviors;
}

interface Iwe_flowerVars extends VariableType {
	
}
interface Iwe_flowerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iwe_flower extends IWorldInstance {
	instVars: Iwe_flowerVars;
	behaviors: Iwe_flowerBehaviors;
}

interface Iwei_textVars extends VariableType {
	/**  **/
	['tag']: string;
}
interface Iwei_textBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iwei_text extends ITextInstance {
	instVars: Iwei_textVars;
	behaviors: Iwei_textBehaviors;
}

interface Iwei_managerVars extends VariableType {
	
}
interface Iwei_managerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iwei_manager extends ISpriteInstance {
	instVars: Iwei_managerVars;
	behaviors: Iwei_managerBehaviors;
}

interface Iwei_chooseVars extends VariableType {
	
}
interface Iwei_chooseBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iwei_choose extends ISpriteInstance {
	instVars: Iwei_chooseVars;
	behaviors: Iwei_chooseBehaviors;
}

interface IwallVars extends VariableType {
	
}
interface IwallBehaviors extends Record<string, IBehaviorInstance> {
	['实体']: IBehaviorInstance
}
interface Iwall extends IWorldInstance {
	instVars: IwallVars;
	behaviors: IwallBehaviors;
}

interface ITimelineVars extends VariableType {
	
}
interface ITimelineBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITimeline extends IWorldInstance {
	instVars: ITimelineVars;
	behaviors: ITimelineBehaviors;
}

interface ITerrorTriggerVars extends VariableType {
	/**  **/
	['times']: number;
}
interface ITerrorTriggerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITerrorTrigger extends ISpriteInstance {
	instVars: ITerrorTriggerVars;
	behaviors: ITerrorTriggerBehaviors;
}

interface Italk_textVars extends VariableType {
	
}
interface Italk_textBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Italk_text extends ITextInstance {
	instVars: Italk_textVars;
	behaviors: Italk_textBehaviors;
}

interface Italk_barVars extends VariableType {
	
}
interface Italk_barBehaviors extends Record<string, IBehaviorInstance> {
	['Tween']: IBehaviorInstance
	['Fade']: IBehaviorInstance
}
interface Italk_bar extends ISpriteInstance {
	instVars: Italk_barVars;
	behaviors: Italk_barBehaviors;
}

interface IstoryT1ManagerVars extends VariableType {
	/**  **/
	['isTrigger']: boolean;
}
interface IstoryT1ManagerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IstoryT1Manager extends ISpriteInstance {
	instVars: IstoryT1ManagerVars;
	behaviors: IstoryT1ManagerBehaviors;
}

interface ISteleTerrorManagerVars extends VariableType {
	
}
interface ISteleTerrorManagerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISteleTerrorManager extends ISpriteInstance {
	instVars: ISteleTerrorManagerVars;
	behaviors: ISteleTerrorManagerBehaviors;
}

interface ISpeechSynthesisVars extends VariableType {
	
}
interface ISpeechSynthesisBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISpeechSynthesis extends IWorldInstance {
	instVars: ISpeechSynthesisVars;
	behaviors: ISpeechSynthesisBehaviors;
}

interface IskyboxVars extends VariableType {
	
}
interface IskyboxBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iskybox extends IWorldInstance {
	instVars: IskyboxVars;
	behaviors: IskyboxBehaviors;
}

interface IServersListTextVars extends VariableType {
	
}
interface IServersListTextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IServersListText extends ITextInstance {
	instVars: IServersListTextVars;
	behaviors: IServersListTextBehaviors;
}

interface IScriptReloadVars extends VariableType {
	
}
interface IScriptReloadBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IScriptReload extends IWorldInstance {
	instVars: IScriptReloadVars;
	behaviors: IScriptReloadBehaviors;
}

interface IScreenHintVars extends VariableType {
	
}
interface IScreenHintBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IScreenHint extends ITextInstance {
	instVars: IScreenHintVars;
	behaviors: IScreenHintBehaviors;
}

interface IRoadVars extends VariableType {
	
}
interface IRoadBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IRoad extends IWorldInstance {
	instVars: IRoadVars;
	behaviors: IRoadBehaviors;
}

interface IPortalTriggerVars extends VariableType {
	/**  **/
	['TextPrompt']: string;
	/**  **/
	['TeleportX']: number;
	/**  **/
	['TeleportY']: number;
	/**  **/
	['isEnble']: boolean;
}
interface IPortalTriggerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPortalTrigger extends ISpriteInstance {
	instVars: IPortalTriggerVars;
	behaviors: IPortalTriggerBehaviors;
}

interface IPlLineVars extends VariableType {
	
}
interface IPlLineBehaviors extends Record<string, IBehaviorInstance> {
	['Turret']: IBehaviorInstance
}
interface IPlLine extends ISpriteInstance {
	instVars: IPlLineVars;
	behaviors: IPlLineBehaviors;
}

interface IPlainTextVars extends VariableType {
	
}
interface IPlainTextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPlainText extends ITextInstance {
	instVars: IPlainTextVars;
	behaviors: IPlainTextBehaviors;
}

interface IPlVars extends VariableType {
	
}
interface IPlBehaviors extends Record<string, IBehaviorInstance> {
	['Custom']: IBehaviorInstance
}
interface IPl extends IWorldInstance {
	instVars: IPlVars;
	behaviors: IPlBehaviors;
}

interface IPathFindPointVars extends VariableType {
	
}
interface IPathFindPointBehaviors extends Record<string, IBehaviorInstance> {
	['淡入淡出']: IBehaviorInstance
}
interface IPathFindPoint extends ISpriteInstance {
	instVars: IPathFindPointVars;
	behaviors: IPathFindPointBehaviors;
}

interface INameEditBoxVars extends VariableType {
	
}
interface INameEditBoxBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface INameEditBox extends IWorldInstance {
	instVars: INameEditBoxVars;
	behaviors: INameEditBoxBehaviors;
}

interface IMouseVars extends VariableType {
	
}
interface IMouseBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMouse extends IMouseObjectType {
	instVars: IMouseVars;
	behaviors: IMouseBehaviors;
}

interface ILoginstatetextVars extends VariableType {
	
}
interface ILoginstatetextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILoginstatetext extends ITextInstance {
	instVars: ILoginstatetextVars;
	behaviors: ILoginstatetextBehaviors;
}

interface ILobbyRoomNodeVars extends VariableType {
	
}
interface ILobbyRoomNodeBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILobbyRoomNode extends ISpriteInstance {
	instVars: ILobbyRoomNodeVars;
	behaviors: ILobbyRoomNodeBehaviors;
}

interface Ilevel_c_map_choose_boxVars extends VariableType {
	
}
interface Ilevel_c_map_choose_boxBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ilevel_c_map_choose_box extends ISpriteInstance {
	instVars: Ilevel_c_map_choose_boxVars;
	behaviors: Ilevel_c_map_choose_boxBehaviors;
}

interface Ilevel_c_mapVars extends VariableType {
	/**  **/
	['index']: number;
}
interface Ilevel_c_mapBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ilevel_c_map extends ISpriteInstance {
	instVars: Ilevel_c_mapVars;
	behaviors: Ilevel_c_mapBehaviors;
}

interface Ilevel_cVars extends VariableType {
	
}
interface Ilevel_cBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ilevel_c extends ISpriteInstance {
	instVars: Ilevel_cVars;
	behaviors: Ilevel_cBehaviors;
}

interface ILevelManagerVars extends VariableType {
	
}
interface ILevelManagerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILevelManager extends ISpriteInstance {
	instVars: ILevelManagerVars;
	behaviors: ILevelManagerBehaviors;
}

interface IKeyboardVars extends VariableType {
	
}
interface IKeyboardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IKeyboard extends IKeyboardObjectType {
	instVars: IKeyboardVars;
	behaviors: IKeyboardBehaviors;
}

interface IJumpSoundTrigerVars extends VariableType {
	/**  **/
	['soundName']: string;
	/**  **/
	['type']: number;
	/**  **/
	['only']: boolean;
	/**  **/
	['playetimes']: number;
	/**  **/
	['u_speak']: string;
}
interface IJumpSoundTrigerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IJumpSoundTriger extends ISpriteInstance {
	instVars: IJumpSoundTrigerVars;
	behaviors: IJumpSoundTrigerBehaviors;
}

interface IGraphTextVars extends VariableType {
	
}
interface IGraphTextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IGraphText extends ITextInstance {
	instVars: IGraphTextVars;
	behaviors: IGraphTextBehaviors;
}

interface IGhostBaseVars extends VariableType {
	
}
interface IGhostBaseBehaviors extends Record<string, IBehaviorInstance> {
	['实体']: IBehaviorInstance
}
interface IGhostBase extends ISpriteInstance {
	instVars: IGhostBaseVars;
	behaviors: IGhostBaseBehaviors;
}

interface IfpscamVars extends VariableType {
	
}
interface IfpscamBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ifpscam extends IWorldInstance {
	instVars: IfpscamVars;
	behaviors: IfpscamBehaviors;
}

interface IfogVars extends VariableType {
	
}
interface IfogBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ifog extends ISpriteInstance {
	instVars: IfogVars;
	behaviors: IfogBehaviors;
}

interface Ifloor_5Vars extends VariableType {
	
}
interface Ifloor_5Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ifloor_5 extends ISpriteInstance {
	instVars: Ifloor_5Vars;
	behaviors: Ifloor_5Behaviors;
}

interface Ifloor_4Vars extends VariableType {
	
}
interface Ifloor_4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ifloor_4 extends IWorldInstance {
	instVars: Ifloor_4Vars;
	behaviors: Ifloor_4Behaviors;
}

interface Ifloor_3Vars extends VariableType {
	
}
interface Ifloor_3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ifloor_3 extends IWorldInstance {
	instVars: Ifloor_3Vars;
	behaviors: Ifloor_3Behaviors;
}

interface Ifloor_1Vars extends VariableType {
	
}
interface Ifloor_1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ifloor_1 extends IWorldInstance {
	instVars: Ifloor_1Vars;
	behaviors: Ifloor_1Behaviors;
}

interface IDoorMaskVars extends VariableType {
	
}
interface IDoorMaskBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDoorMask extends ISpriteInstance {
	instVars: IDoorMaskVars;
	behaviors: IDoorMaskBehaviors;
}

interface IDataManagerVars extends VariableType {
	
}
interface IDataManagerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDataManager extends ISpriteInstance {
	instVars: IDataManagerVars;
	behaviors: IDataManagerBehaviors;
}

interface Ic_window_managerVars extends VariableType {
	
}
interface Ic_window_managerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ic_window_manager extends ISpriteInstance {
	instVars: Ic_window_managerVars;
	behaviors: Ic_window_managerBehaviors;
}

interface ICharacters_t_boxVars extends VariableType {
	
}
interface ICharacters_t_boxBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacters_t_box extends ISpriteInstance {
	instVars: ICharacters_t_boxVars;
	behaviors: ICharacters_t_boxBehaviors;
}

interface ICharacters_nameVars extends VariableType {
	
}
interface ICharacters_nameBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacters_name extends ITextInstance {
	instVars: ICharacters_nameVars;
	behaviors: ICharacters_nameBehaviors;
}

interface ICharactersbaseVars extends VariableType {
	
}
interface ICharactersbaseBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharactersbase extends ISpriteInstance {
	instVars: ICharactersbaseVars;
	behaviors: ICharactersbaseBehaviors;
}

interface Icar_storyt1Vars extends VariableType {
	
}
interface Icar_storyt1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Icar_storyt1 extends IWorldInstance {
	instVars: Icar_storyt1Vars;
	behaviors: Icar_storyt1Behaviors;
}

interface ICameraFlowPointVars extends VariableType {
	
}
interface ICameraFlowPointBehaviors extends Record<string, IBehaviorInstance> {
	['Orbit']: IBehaviorInstance
}
interface ICameraFlowPoint extends ISpriteInstance {
	instVars: ICameraFlowPointVars;
	behaviors: ICameraFlowPointBehaviors;
}

interface IcamVars extends VariableType {
	
}
interface IcamBehaviors extends Record<string, IBehaviorInstance> {
	['ScrollTo']: IBehaviorInstance
	['MoveTo']: IMoveToBehaviorInstance
}
interface Icam extends ISpriteInstance {
	instVars: IcamVars;
	behaviors: IcamBehaviors;
}

interface IButtonVars extends VariableType {
	/**  **/
	['id']: number;
}
interface IButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IButton extends IButtonInstance {
	instVars: IButtonVars;
	behaviors: IButtonBehaviors;
}

interface IBUILD_MANEGERVars extends VariableType {
	
}
interface IBUILD_MANEGERBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBUILD_MANEGER extends ISpriteInstance {
	instVars: IBUILD_MANEGERVars;
	behaviors: IBUILD_MANEGERBehaviors;
}

interface IBUILD_BOXVars extends VariableType {
	
}
interface IBUILD_BOXBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBUILD_BOX extends ISpriteInstance {
	instVars: IBUILD_BOXVars;
	behaviors: IBUILD_BOXBehaviors;
}

interface IBottomPlateVars extends VariableType {
	
}
interface IBottomPlateBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBottomPlate extends ISpriteInstance {
	instVars: IBottomPlateVars;
	behaviors: IBottomPlateBehaviors;
}

interface IAudioVars extends VariableType {
	
}
interface IAudioBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAudio extends IAudioObjectType {
	instVars: IAudioVars;
	behaviors: IAudioBehaviors;
}

interface I3DShapeVars extends VariableType {
	
}
interface I3DShapeBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape extends IWorldInstance {
	instVars: I3DShapeVars;
	behaviors: I3DShapeBehaviors;
}

interface ITEST_BUILDVars extends VariableType {
	
}
interface ITEST_BUILDBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITEST_BUILD extends IWorldInstance {
	instVars: ITEST_BUILDVars;
	behaviors: ITEST_BUILDBehaviors;
}

interface Iwall2Vars extends VariableType {
	
}
interface Iwall2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iwall2 extends IWorldInstance {
	instVars: Iwall2Vars;
	behaviors: Iwall2Behaviors;
}

interface Iwall1Vars extends VariableType {
	
}
interface Iwall1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iwall1 extends IWorldInstance {
	instVars: Iwall1Vars;
	behaviors: Iwall1Behaviors;
}

interface If_wallVars extends VariableType {
	
}
interface If_wallBehaviors extends Record<string, IBehaviorInstance> {
	['Solid']: IBehaviorInstance
}
interface If_wall extends IWorldInstance {
	instVars: If_wallVars;
	behaviors: If_wallBehaviors;
}

interface INPCVars extends VariableType {
	/**  **/
	['npc_name']: string;
	/**  **/
	['npc_id']: number;
	/**  **/
	['npc_group']: string;
	/**  **/
	['npc_data']: number;
	/**  **/
	['npc_distance']: number;
}
interface INPCBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface INPC extends IWorldInstance {
	instVars: INPCVars;
	behaviors: INPCBehaviors;
}

interface If_npcVars extends VariableType {
	/**  **/
	['npc_name']: string;
	/**  **/
	['npc_id']: number;
	/**  **/
	['npc_group']: string;
	/**  **/
	['npc_data']: number;
	/**  **/
	['npc_distance']: number;
}
interface If_npcBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface If_npc extends IWorldInstance {
	instVars: If_npcVars;
	behaviors: If_npcBehaviors;
}

interface If_GhostVars extends VariableType {
	/**  **/
	['Dir']: string;
	/**  **/
	['MOVE_TIMER']: number;
}
interface If_GhostBehaviors extends Record<string, IBehaviorInstance> {
	['WallBe']: IBehaviorInstance
	['PathBe']: IPathfindingBehaviorInstance
	['MoveBe']: IMoveToBehaviorInstance
	['Timer_']: IBehaviorInstance
}
interface If_Ghost extends IWorldInstance {
	instVars: If_GhostVars;
	behaviors: If_GhostBehaviors;
}

interface ITreeVars extends VariableType {
	
}
interface ITreeBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITree extends IWorldInstance {
	instVars: ITreeVars;
	behaviors: ITreeBehaviors;
}

interface If_FaceCameraVars extends VariableType {
	
}
interface If_FaceCameraBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface If_FaceCamera extends IWorldInstance {
	instVars: If_FaceCameraVars;
	behaviors: If_FaceCameraBehaviors;
}

interface If_DoorVars extends VariableType {
	/**  **/
	['CurrentState']: string;
	/**  **/
	['OpenAngel']: number;
	/**  **/
	['CloseAngel']: number;
}
interface If_DoorBehaviors extends Record<string, IBehaviorInstance> {
	['Solid']: IBehaviorInstance
	['Tween']: IBehaviorInstance
}
interface If_Door extends IWorldInstance {
	instVars: If_DoorVars;
	behaviors: If_DoorBehaviors;
}

interface IKuliPaVars extends VariableType {
	/**  **/
	['Distance']: number;
	/**  **/
	['Dir']: string;
	/**  **/
	['MOVE_TIMER']: number;
}
interface IKuliPaBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IKuliPa extends IWorldInstance {
	instVars: IKuliPaVars;
	behaviors: IKuliPaBehaviors;
}

interface IDoorVars extends VariableType {
	/**  **/
	['Distance']: number;
	/**  **/
	['CurrentState']: string;
	/**  **/
	['OpenAngel']: number;
	/**  **/
	['CloseAngel']: number;
	/**  **/
	['open']: number;
	/**  **/
	['close']: number;
}
interface IDoorBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDoor extends IWorldInstance {
	instVars: IDoorVars;
	behaviors: IDoorBehaviors;
}

interface If_DistanceFromPlVars extends VariableType {
	/**  **/
	['Distance']: number;
}
interface If_DistanceFromPlBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface If_DistanceFromPl extends IWorldInstance {
	instVars: If_DistanceFromPlVars;
	behaviors: If_DistanceFromPlBehaviors;
}

interface Icar_storyt2Vars extends VariableType {
	
}
interface Icar_storyt2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Icar_storyt2 extends IWorldInstance {
	instVars: Icar_storyt2Vars;
	behaviors: Icar_storyt2Behaviors;
}

interface IPoliceCarVars extends VariableType {
	
}
interface IPoliceCarBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPoliceCar extends IWorldInstance {
	instVars: IPoliceCarVars;
	behaviors: IPoliceCarBehaviors;
}

interface IManVars extends VariableType {
	
}
interface IManBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMan extends IWorldInstance {
	instVars: IManVars;
	behaviors: IManBehaviors;
}

interface IRoadBlockVars extends VariableType {
	
}
interface IRoadBlockBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IRoadBlock extends IWorldInstance {
	instVars: IRoadBlockVars;
	behaviors: IRoadBlockBehaviors;
}

interface Ihouse2Vars extends VariableType {
	
}
interface Ihouse2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ihouse2 extends IWorldInstance {
	instVars: Ihouse2Vars;
	behaviors: Ihouse2Behaviors;
}

interface IDancePeopleVars extends VariableType {
	
}
interface IDancePeopleBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDancePeople extends IWorldInstance {
	instVars: IDancePeopleVars;
	behaviors: IDancePeopleBehaviors;
}

interface Ihouse3Vars extends VariableType {
	
}
interface Ihouse3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ihouse3 extends IWorldInstance {
	instVars: Ihouse3Vars;
	behaviors: Ihouse3Behaviors;
}

interface Ihouse1Vars extends VariableType {
	
}
interface Ihouse1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ihouse1 extends IWorldInstance {
	instVars: Ihouse1Vars;
	behaviors: Ihouse1Behaviors;
}

interface If_3DobjbectVars extends VariableType {
	
}
interface If_3DobjbectBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface If_3Dobjbect extends IWorldInstance {
	instVars: If_3DobjbectVars;
	behaviors: If_3DobjbectBehaviors;
}


interface IInstance {
    addEventListener(eventName: 'destroy', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'destroy', callback: (...params: unknown[]) => void): void;
    dispatchEvent(e: Event): void;
    runtime: IRuntime;
    objectType: IObjectClass;
    instVars: VariableType;
    behaviors: Record<string, IBehaviorInstance>;
    readonly uid: number;
    destroy(): void;
}
declare var IInstance: { new(): IInstance };

interface I3DCameraObjectType extends IObjectClass {
    lookAtPosition(camerax: number, cameraY: number, cameraZ: number, lookX: number, lookY: number, lookZ: number, upX: number, upY: number, upZ: number): void;
    lookParallelToLayout(cameraX: number, cameraY: number, cameraZ: number, lookAngle: number): void;
    restore2DCamera(): void;
    moveAlongLayoutAxis(distance: number, axis: 'x' | 'y' | 'z', which: 'camera' | 'look' | 'both'): void;
    moveAlongCameraAxis(distance: number, axis: 'forward' | 'up' | 'right', which: 'camera' | 'look' | 'both'): void;
    getCameraPosition(): [number, number, number];
    getLookPosition(): [number, number, number];
    getForwardVector(): [number, number, number];
    getForwardVector(): [number, number, number];
    getUpVector(): [number, number, number];
    readonly zScale: number;
}

interface I3DShapeInstance extends IWorldInstance {
    shape: 'box' | 'prism' | 'wedge' | 'pyramid' | 'corner-out' | 'corner-in';
    zHeight: number;
    setFaceVisible(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', visible: boolean): void;
    isFaceVisible(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom'): boolean;
    setFaceImage(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', image: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom'): void;
    setFaceObject(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', objectClass: IObjectClass): void;
    zTilingFactor: number;
    getImagePointCount(): number;
    getImagePointX(nameOrIndex: string | number): number
    getImagePointY(nameOrIndex: string | number): number
    getImagePoint(nameOrIndex: string | number): [number, number]
}
declare var I3DShapeInstance: undefined | { new(): I3DShapeInstance };

interface IArrayInstance extends IWorldInstance {
    width: number;
    height: number;
    depth: number;
    setSize(width: number, height?: number, depth?: number): void;
    getAt(x?: number, y?: number, z?: number): string | number;
    setAt(val: string | number, x: number, y?: number, z?: number): void;
}
declare var IArrayInstance: undefined | { new(): IArrayInstance };

interface IAudioObjectType extends IObjectClass {
    audioContext: AudioContext;
    destinationNode: unknown;
}
declare var IAudioObjectType: undefined | { new(): IAudioObjectType };

interface IBinaryDataInstance extends IInstance {
    setArrayBufferCopy(viewOrBuffer: ArrayBuffer | DataView): void;
    setArrayBufferTransfer(arrayBuffer: ArrayBuffer): void;
    getArrayBufferCopy(): ArrayBuffer;
    getArrayBufferReadOnly(): ArrayBuffer;
}
declare var IBinaryDataInstance: undefined | { new(): IBinaryDataInstance };

interface IButtonInstance extends IDOMInstance {
    addEventListener(eventName: 'click', callback: (...params: unknown[]) => void): void;
    text: string;
    tooltip: string;
    isEnabled: boolean;
    isChecked: false;
}
declare var IButtonInstance: undefined | { new(): IButtonInstance };

interface IDictionaryInstance extends IInstance {
    getDataMap(): Record<string, string | number>;
}
declare var IDictionaryInstance: undefined | { new(): IDictionaryInstance };

interface IDrawingCanvasInstance extends IWorldInstance {
    readonly surfaceDeviceWidth: number;    
    readonly surfaceDeviceHeight:  number;
    getImagePixelData: Promise<ImageData>;
    loadImagePixelData(imageData: ImageData, premultiplyAlpha?: boolean): void;  
}
declare var IDrawingCanvasInstance: undefined | { new(): IDrawingCanvasInstance };

interface IJsonInstance extends IInstance {
    getJsonDataCopy(): unknown;
    setJsonDataCopy(object: unknown): void;
    setJsonString(string: string): void;
    toCompactString(): string;
    toBeautifiedString(): string;
}
declare var IJsonInstance: undefined | { new(): IJsonInstance };

interface ISliderBarInstance extends IDOMInstance {
    addEventListener(eventName: 'click' | 'change', callback: (...params: unknown[]) => void): void;
    value: number;
    maximum: number;
    minimum: number;
    step: number;
    tooltip: string;
    isEnabled: boolean;
}
declare var ISliderBarInstance: undefined | { new(): ISliderBarInstance };

interface ISpriteInstance extends IWorldInstance {
    setAnimation(animationName: string, from?: 'beginning' | 'current-frame'): void;
    readonly animationName: string;
    startAnimation(from?: 'current-frame' | 'begininng'): void;
    stopAnimation(): void;
    animationFrame: number;
    animationSpeed: number;
    animationRepeatToFrame: number;
    readonly imageWidth: number;
    readonly imageHeight: number;
    getImagePointCount(): number;
    getImagePointX(nameOrIndex: string | number): number;
    getImagePointY(nameOrIndex: string | number): number;
    getImagePoint(nameOrIndex: string | number): [number | number];
    getPolyPointCount(): number;
    getPolyPointX(index: number): number;
    getPolyPointY(index: number): number;
    getPolyPoint(index: number): [number | number];
}
declare var ISpriteInstance: undefined | { new(): ISpriteInstance };

interface ISpriteFontInstance extends IWorldInstance {
    text: string;
    typewriterText(text: string, duration: number): void;
    typewriterFinish(): void;
    characterScale: number;
    characterSpacing: number;
    lineHeight: number;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    wordWrapMode: 'word' | 'character';
}
declare var ISpriteFontInstance: undefined | { new(): ISpriteFontInstance };

interface ITextInstance extends IWorldInstance {
    text: string;
    typewriterText(text: string, duration: number): void;
    typewriterFinish(): void;
    fontColor: [number, number, number];
    fontFace: string;
    isBold: boolean;
    isItalic: boolean;
    sizePt: number;
    lineHeight: number;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    wordWrapMode: 'word' | 'character';
    textWidth: number;
    textHeight: number;
}
declare var ITextInstance: undefined | { new(): ITextInstance };

interface ITextInputInstance extends IDOMInstance {
    addEventListener(eventName: 'click' | 'dblclick' | 'change', callback: (...params: unknown[]) => void): void;
    text: string;
    placeholder: string;
    tooltip: string;
    isEnabled: boolean;
    isReadOnly: boolean;
    scrollToBottom(): void;
    maxLength: number;
}
declare var ITextInputInstance: undefined | { new(): ITextInputInstance };

interface ITiledBackgroundInstance extends IWorldInstance {
    imageHeight: number;
    imageWidth: number;
    imageOffsetX: number;
    imageOffsetY: number;
    imageScaleX: number;
    imageScaleY: number;
    imageAngle: number;
    imageAngleDegrees: number;
}
declare var ITiledBackgroundInstance: undefined | { new(): ITiledBackgroundInstance };

interface ITilemapInstance extends IWorldInstance {
    TILE_FLIPPED_HORIZONTAL: -0x80000000;
    TILE_FLIPPED_VERTICAL: 0x40000000;
    TILE_FLIPPED_DIAGONAL: 0x20000000;
    TILE_FLAGS_MASK: 0xE0000000;
    TILE_ID_MASK: 0x1FFFFFFF;

    readonly mapWidth: number;
    readonly mapHeight: number;
    readonly mapDisplayHeight: number;
    readonly mapDisplayWidth: number;
    readonly tileWidth: number;
    readonly tileHeight: number;
    getTileAt(x: number, y: number): number;
    setTileAt(x: number, y: number, tile: number): void;
}
declare var ITilemapInstance: undefined | { new(): ITilemapInstance };

interface IDOMInstance {
    focus(): void;
    blur(): void;
    setCssStyle(prop: string, value: string): void;
    getElement(): HTMLElement;
}
declare var IDOMInstance: undefined | { new(): IDOMInstance };

interface IWorldInstance extends IInstance  {
    layout: ILayout;
    layer: ILayer;
    x: number;
    y: number;
    zElevation: number;
    readonly totalZElevation: number;
    width: number;
    height: number;
    angle: number;
    angleDegrees: number;
    getBoundingBox(): DOMRect;
    getBoundingQuad(): DOMQuad;
    isVisible: boolean;
    opacity: boolean;
    colorRgb: [number, number, number];
    blendMode: 'normal' | 'additive' | 'copy' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop';
    effects: Array<IEffectInstance>;
    moveToTop(): void;
    moveToBottom(): void;
    moveToLayer(layer: ILayer): void;
    moveAdjacentToInstance(other: IWorldInstance, isAfter: boolean): void;
    readonly zIndex: number;
    containsPoint(x: number, y: number): boolean;
    testOverlap(worldInstance: IWorldInstance): boolean;
    testOverlapSolid(): IWorldInstance | null;
    createMesh(hSize: number, vSize: number): void;
    releaseMesh(): void;
    setMeshPoint(col: number, row: number, options: { mode?: 'absolute' | 'relative', x?: number, y?: number, u?: number, v?: number, zElevation?: number}): void;
    getMeshSize(): [number, number];
    getParent(): IWorldInstance | null;
    getTopParent(): IWorldInstance | null;
    parents(): Iterator<IWorldInstance>;
    getChildCount(): number;
    getChildAt(index: number): IWorldInstance | null;
    children(): Iterator<IWorldInstance>;
    allChildren(): Iterator<IWorldInstance>;
    addChild(worldInstance: IWorldInstance, options?: { transformX?: boolean, transformY?: boolean,transformWidth?: boolean,transformHeight?: boolean, transformAngle?: boolean,transformZElevation?: boolean,destroyWithParent?: boolean }): void;
    removeChild(worldInstance: IWorldInstance): void;
    removeFromParent(worldInstance: IWorldInstance): void;
}
declare var IWorldInstance: { new(): IWorldInstance };


interface IBehavior {
    getAllInstances(): Array<IInstance>;
}
declare var IBehavior: { new(): IBehavior };

interface IBehaviorInstance {
    dispatchEvent(e: Event): void;
    instance: IInstance;
    behavior: IBehavior;
    runtime: IRuntime;
}
declare var IBehaviorInstance: { new(): IBehaviorInstance };

interface I8DirectionBehaviorInstance extends IBehaviorInstance {
    stop(): void;
    reverse(): void;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    vectorX: number;
    vectorY: number;
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}
declare var I8DirectionBehaviorInstance: undefined | { new(): I8DirectionBehaviorInstance };

interface IBulletBehaviorInstance extends IBehaviorInstance {
    speed: number;
    acceleration: number;
    gravity: number;
    angleOfMotion: number;
    bounceOffSolids: number;
    distanceTravelled: number;
    isEnabled: boolean;
}
declare var IBulletBehaviorInstance: undefined | { new(): IBulletBehaviorInstance };

interface ICarBehaviorInstance extends IBehaviorInstance {
    stop(): void;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    readonly vectorX: number;
    readonly vectorY: number;
    readonly angleOfMotion: number;
    steerSpeed: number;
    driftRecover: number;
    friction: number;
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}

declare var ICarBehaviorInstance: undefined | { new(): ICarBehaviorInstance };

interface ILOSBehaviorInstance extends IBehaviorInstance {
    range: number;
    coneOfView: number;
    hasLOStoPosition(x: number, y: number): boolean;
    hasLOSBetweenPositions(fromX: number, fromY: number, fromAngle: number, toX: number, toY: number): boolean;
    castRay(fromX: number, fromY: number, toX: number, toY: number, useCollisionCells?: boolean): ILOSBehaviorRay;
    ray: ILOSBehaviorRay;
}

declare var ILOSBehaviorInstance: undefined | { new(): ILOSBehaviorInstance };

interface ILOSBehaviorRay {
    readonly didCollide: boolean;
    readonly hitX: boolean;
    readonly hitY: boolean;
    readonly hitDistance: boolean;
    readonly hitUid: number;
    getNormalX(length: number): number;
    getNormalY(length: number): number;
    getReflectionX(length: number): number;
    getReflectionY(length: number): number;
    readonly reflectionAngle: number;
}

interface IMoveToBehaviorInstance extends IBehaviorInstance {
    addEventListener(type: 'arrived' | 'hitSolid', callback: (...params: unknown[]) => void, capture?: boolean): void;
    removeEventListener(type: 'arrived' | 'hitSolid', callback: (...params: unknown[]) => void, capture?: boolean): void;
    moveToPosition(x: number, y: number, isDirect?: boolean): void
    getTargetX(): number
    getTargetY(): number
    getTargetPosition(): [number, number]
    getWaypointCount(): number
    getWaypointX(index: number): number
    getWaypointY(index: number): number
    getWaypoint(index: number): [number, number]
    stop(): void
    readonly isMoving: boolean
    speed: number
    maxSpeed: number
    acceleration: number
    deceleration: number
    angleOfMotion: number
    rotateSpeed: number;
    isStopOnSolids: boolean;
    isEnabled: boolean;
}

declare var IMoveToBehaviorInstance: undefined | { new(): IMoveToBehaviorInstance };

interface IPathfindingBehaviorInstance extends IBehaviorInstance {
    addEventListener(type: 'arrived', callback: (...params: unknown[]) => void, capture?: boolean): void;
    removeEventListener(type: 'arrived', callback: (...params: unknown[]) => void, capture?: boolean): void;
    map: IPathfindingMap;
    findPath(x: number, y: number): Promise<boolean>;
    startMoving(): void;
    stop(): void;
    maxSpeed: number;
    speed: number;
    acceleration: number;
    deceleration: number;
    rotateSpeed: number;
    readonly isCalculatingPath: boolean;
    readonly isMoving: boolean;
    currentMode: number;
    getNodeCount(): number;
    getNodeXAt(i: number): number;
    getNodeYAt(i: number): number;
    getNodeAt(i: number): [number, number];
    isEnabled: boolean;
}

declare var IPathfindingBehaviorInstance: undefined | { new(): IPathfindingBehaviorInstance };

interface IPathfindingMap {
    isCellObstacle(x: number, y: number): boolean;
    isDiagonalsEnabled: boolean;
    regenerateMap(): Promise<void>;
    regenerateRegion(startX: number, startY: number, endX: number, endY: number): Promise<void>;
    regenerateObjectRegion(objectClass: IObjectClass): Promise<void>;
}

interface IPhysicsBehavior {
    worldGravity: boolean;
    steppingMode: 'fixed' | 'variable';
    velocityIterations: number;
    positionIterations: number;
    setCollisionsEnabled(iObjectClassA: IObjectClass, iObjectClassB: IObjectClass, state: boolean): void;
}

declare var IPhysicsBehavior: undefined | { new(): IPhysicsBehavior };

interface IPhysicsBehaviorInstance extends IBehaviorInstance {
    isEnabled: boolean;
    applyForce(forceX: number, forceY: number, imagePoint?: number): void;
    applyForceTowardPosition(force: number, x: number, y: number, imagePoint?: number): void;
    applyForceAtAngle(force: number, angle: number, imagePoint?: number): void;
    applyImpulse(impluseX: number, impluseY: number, imagePoint?: number): void;
    applyImpulseTowardPosition(impulse: number, x: number, y: number, imagePoint?: number): void;
    applyImpulseAtAngle(impulse: number, angle: number, imagePoint?: number): void;
    applyTorque(torque: number): void;
    applyTorqueToAngle(torque: number, angle: number): void;
    applyTorqueToPosition(torque: number, x: number, y: number): void;
    setVelocity(velocityX: number, velocityY: number): void;
    geVelocityX(): number;
    geVelocityY(): number;
    geVelocity(): [number, number];
    angularVelocity: number;
    isImmovable: boolean;
    isPreventRotation: boolean;
    density: number;
    friction: number;
    elasticity: number;
    linearDamping: number;
    angularDamping: number;
    isBullet: boolean;
    readonly mass: number;
    getCenterOfMassX(): number;
    getCenterOfMassY(): number;
    getCenterOfMass(): [number, number];
    readonly isSleeping: boolean;
    createDistanceJoint(imagePoint: number, otherInstance: IInstance, otherImagePoint: number, damping: number, massSpringDamperFrequency: number): void;
    createRevoluteJoint(imagePoint: number, otherInstance: IInstance): void;
    createLimitedRevoluteJoint(imagePoint: number, otherInstance: IInstance, lower: number, upper: number): void;
    createPrismaticJoint(imagePoint: number, otherInstance: IInstance, axisAngle: number, enableLimit: boolean, lowerTranslation: number, upperTranslation: number, enableMotor: boolean, motorSpeed: number, maxMotorForce: number): void;
    removeAllJoints(): void;
    getContactCount(): number;
    getContactX(index: number): number;
    getContactY(index: number): number;
    getContact(index: number): [number, number];
}

declare var IPhysicsBehaviorInstance: undefined | { new(): IPhysicsBehaviorInstance };

interface IPlatformBehaviorInstance extends IBehaviorInstance {
    fallThrough(): void;
    resetDoubleJump(allow: boolean): void;
    simulateControl(control: 'left' | 'right' | 'jump'): void;
    readonly speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    vectorX: number;
    vectorY: number;
    jumpStength: number;
    maxFallSpeed: number;
    gravity: number;
    gravityAngle: number;
    isDoubleJumpEnabled: boolean;
    jumpSustain: number;
    readonly isMoving: boolean;
    readonly isOnFloor: boolean;
    isByWall(side: 'left' | 'right'): boolean;
    readonly isJumping: boolean;
    readonly isFalling: boolean
    ceilingCollisionMode: 'stop' | 'preserve-momentum';
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}

declare var IPlatformBehaviorInstance: undefined | { new(): IPlatformBehaviorInstance };

interface ISineBehaviorInstance extends IBehaviorInstance {
    movement: 'horizontal' | 'vertical' | 'forwards-backwards' | 'size' | 'width' | 'height' | 'angle' | 'opacity' | 'z-elevation' | 'value-only';
    wave: 'sine' | 'triangle' | 'sawtooth' | 'reverse-sawtooth' | 'square';
    period: number;
    magnitude: number;
    phase: number;
    readonly value: number;
    updateInitialState(): void;
    isEnabled: boolean;
}

declare var ISineBehaviorInstance: undefined | { new(): ISineBehaviorInstance };

interface ITileMovementBehaviourInstance extends IBehaviorInstance {
    isIgnoringInput: boolean;
    isDefaultControls: boolean;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    isEnabled: boolean;
    setSpeed(x: number, y: number): void;
    setGridPosition(x: number, y: number, immediate: boolean): void;
    getGridPosition(): [number, number];
    modifyGridDimensions(width: number, height: number, xOffset: number, yOffset: number): void;
    isMoving(): boolean;
    isMovingDirection(direction: 'left' | 'right' | 'up' | 'down'): boolean;
    canMoveTo(x: number, y: number): boolean;
    canMoveDirection(direction: 'left' | 'right' | 'up' | 'down', distance: number): boolean;
    getTargetPosition(): [number, number];
    getGridTargetPosition(): [number, number];
    toGridSpace(x: number, y: number): [number, number];
    fromGridSpace(x: number, y: number): [number, number];
}

declare var ITileMovementBehaviourInstance: undefined | { new(): ITileMovementBehaviourInstance };
