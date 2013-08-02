config.addBlockIdProperty("timberChestID", 2550);
var timberChestID = config.getBlockId("timberChestID");
mod.addBlock("timberChest.js", "chest");
mod.addTileEntity("timberChestTE.js", "chest");
mod.addGui("timberChestGUI.js", "chest");

config.addBlockIdProperty("timberFramesID", 2551);
var timberFramesID = config.getBlockId("timberFramesID");
mod.addBlock("timberFrames.js", "normal");

config.addBlockIdProperty("timberSlabsID", 2552);
var timberSlabsID = config.getBlockId("timberSlabsID");
mod.addBlock("timberSlabs.js", "slab");

config.addBlockIdProperty("timberStairsID", 2553);
var timberStairsID = config.getBlockId("timberStairsID");
mod.addBlock("timberStairs.js", "stairs");

config.addBlockIdProperty("timberPanesID", 2554);
var timberPanesID = config.getBlockId("timberPanesID");
mod.addBlock("timberPanes.js", "pane");

config.addBlockIdProperty("timberVinesID", 2555);
var timberVinesID = config.getBlockId("timberVinesID");
mod.addBlock("timberVines.js", "ladder");

config.addBlockIdProperty("timberFloweredVinesID", 2556);
var timberFloweredVinesID = config.getBlockId("timberFloweredVinesID");
mod.addBlock("timberFloweredVines.js", "ladder");

config.addBlockIdProperty("timberShuttersLeftID", 2557);
var timberShuttersLeftID = config.getBlockId("timberShuttersLeftID");
mod.addBlock("timberShuttersLeft.js", "flat");

config.addBlockIdProperty("timberShuttersRightID", 2558);
var timberShuttersRightID = config.getBlockId("timberShuttersRightID");
mod.addBlock("timberShuttersRight.js", "flat");

//--------------------------------------------------------------------------------

mod.addAliasWithMetadata(timberFramesID, 0, "plainTimberFrame");
mod.addAliasWithMetadata(timberFramesID, 1, "crossTimberFrame");
mod.addAliasWithMetadata(timberFramesID, 2, "blankTimberFrame");
mod.addAliasWithMetadata(timberFramesID, 3, "paperWall");
mod.addAliasWithMetadata(timberFramesID, 4, "thatchBlock");

mod.addAliasWithMetadata(timberStairsID, 0, "thatchStairs");

mod.addAliasWithMetadata(timberPanesID, 0, "paperPane");

mod.addAliasWithMetadata(timberSlabsID, 0, "thatchSlab");

mod.addAliasWithMetadata(timberVinesID, 0, "timberVine");
mod.addAliasWithMetadata(timberFloweredVinesID, 0, "timberFloweredVine");

mod.addAliasWithMetadata(timberShuttersLeftID, 0, "timberLeftShutters");
mod.addAliasWithMetadata(timberShuttersRightID, 0, "timberRightShutters");

mod.addAliasWithMetadata(timberChestID, 0, "timberMail");

//--------------------------------------------------------------------------------

// Timber Frames
mod.addRecipe("plainTimberFrame 9", 3, 3, ":plankWood", 35, ":plankWood", ":plankWood", 35, ":plankWood", ":plankWood", 35, ":plankWood");
mod.addRecipe("crossTimberFrame 9", 3, 3, ":plankWood", 35, ":plankWood", 35, ":plankWood", 35, ":plankWood", 35, ":plankWood");
mod.addRecipe("blankTimberFrame 9", 3, 3, ":plankWood", ":plankWood", ":plankWood", 35, ":plankWood", 35, ":plankWood", ":plankWood", ":plankWood");
mod.addRecipe("paperWall 9", 3, 3, ":stickWood", 339, ":stickWood", ":stickWood", 339, ":stickWood", ":stickWood", 339, ":stickWood");
mod.addRecipe("thatchBlock 9", 3, 3, 296, 296, 296, 296, ":plankWood", 296, 296, 296, 296);

// Timber Stairs
mod.addRecipe("thatchStairs 4", 3, 3, "thatchBlock", 0, 0, "thatchBlock", "thatchBlock", 0, "thatchBlock", "thatchBlock", "thatchBlock");

// Timber Slabs
mod.addRecipe("thatchSlab 6", 3, 1, "thatchBlock", "thatchBlock", "thatchBlock");

// Timber Panes
mod.addRecipe("paperPane 6", 3, 2, "paperWall", "paperWall", "paperWall", "paperWall", "paperWall", "paperWall");

// Timber Vines
mod.addRecipe("timberVine 1", 3, 3, ":stickWood", 106, ":stickWood", ":stickWood", 106, ":stickWood", ":stickWood", 106, ":stickWood");
mod.addRecipe("timberFloweredVine 1", 3, 3, ":stickWood", 106, ":stickWood", ":stickWood", ":stickWood", ":stickWood", ":stickWood", 106, ":stickWood");

// Timber Shutters
mod.addRecipe("timberLeftShutters 1", 3, 3, "5:2", ":stickWood", ":stickWood", "5:2", ":stickWood", ":stickWood", "5:2", ":stickWood", ":stickWood");
mod.addRecipe("timberRightShutters 1", 3, 3, ":stickWood", ":stickWood", "5:2", ":stickWood", ":stickWood", "5:2", ":stickWood", ":stickWood", "5:2");

// Timber Mailbox
mod.addRecipe("timberMail 1", 3, 3, ":plankWood", ":plankWood", ":plankWood", ":plankWood", 0, ":plankWood", ":plankWood", 265, ":plankWood");
