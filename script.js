// Load in Modules 
// const Diag = require('Diagnostics');
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');

// Enable Async / Await 
(async function(){
  // Find Cube Object 
  const heart = Scene.root.findFirst('Heart')
  
  // Create Reference of the Face 
  const face = FaceTracking.face(0);
  
  // Bind Signal Rotations 
  (await heart).transform.rotation = face.cameraTransform.rotation;

  // Map the Mouth Openness Value to a certain range 
  const mouthOpenness = face.mouth.openness.toRange(2, 5)
  
  // Diagnostics 
  // Diag.watch('signal', mouthOpenness);
  
  // Reactive 
  // const scalar = 1;
  // const scalarSignal = Reactive.val(scalar);

  // Bind the Mouth Signal to the Heart's 
  ;(await heart).transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);

})()
