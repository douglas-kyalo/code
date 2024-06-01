var doc = app.documents.add(DocumentColorSpace.CMYK, 1050, 600); 


var rect = doc.pathItems.rectangle(doc.height, 0, doc.width, doc.height);
var blackColor = new CMYKColor();
blackColor.black = 100;
rect.fillColor = blackColor;
rect.stroked = false;


var goldColor = new CMYKColor();
goldColor.cyan = 0;
goldColor.magenta = 20;
goldColor.yellow = 70;
goldColor.black = 20;


var companyName = doc.textFrames.add();
companyName.contents = "Your Company Name";
companyName.top = -50; 
companyName.left = 50;
companyName.textRange.characterAttributes.size = 30; 
companyName.textRange.characterAttributes.fillColor = goldColor;
companyName.textRange.characterAttributes.textFont =
  app.textFonts.getByName("MinionPro-Regular");

var position = doc.textFrames.add();
position.contents = "Your Position";
position.top = -100; 
position.left = 50;
position.textRange.characterAttributes.size = 20; 
position.textRange.characterAttributes.fillColor = goldColor;

var contactInfo = doc.textFrames.add();
contactInfo.contents = "+1 (123) 456-7890";
contactInfo.top = -150; 
contactInfo.left = 50;
contactInfo.textRange.characterAttributes.size = 20; 
contactInfo.textRange.characterAttributes.fillColor = goldColor;

var address = doc.textFrames.add();
address.contents = "123 Main St, City, Country";
address.top = -200; 
address.left = 50;
address.textRange.characterAttributes.size = 20; 
address.textRange.characterAttributes.fillColor = goldColor;

var website = doc.textFrames.add();
website.contents = "www.yourwebsite.com";
website.top = -250; 
website.left = 50;
website.textRange.characterAttributes.size = 20; 
website.textRange.characterAttributes.fillColor = goldColor;

var logoFile = new File("/path/to/your/logo.png"); 
if (logoFile.exists) {
  var logo = doc.placedItems.add();
  logo.file = logoFile;
  logo.position = [700, -500]; 
  logo.width = 200; 
  logo.height = 200; 
}
