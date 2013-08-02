id = config.getBlockId("timberChestID");
name = "timberChest";
material = "wood";
creativeTab = "decorations";
stepSound = "wood";
tickrate = 99999;

displayName[0] = "Mailbox";
hardness[0] = 1.5;
drop[0] = config.getBlockId("timberChestID");
addToCreative[0] = true;
fireSpreadSpeed[0] = 5;
flammability[0] = 40;
onActivated[0] = "player.openGui('timberChestGUI', position); result = true;";
hasTileEntity[0] = true;
tileEntity[0] = "timberChestTE";

modelTexture = "mailbox.png";
textureFileYP[0] = "mailbox.png";
textureFileYN[0] = "mailbox.png";
textureFileXP[0] = "mailbox.png";
textureFileXN[0] = "mailbox.png";
textureFileZP[0] = "mailbox.png";
textureFileZN[0] = "mailbox.png";