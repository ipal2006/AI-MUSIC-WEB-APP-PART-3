song = "";
song2= "";
left_wrist_x=0;
left_wrist_y=0;


right_wrist_x=0;
right_wrist_y=0;

function preload()
{
song = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}
function play()
{
    song.play();
    
}
function setup()
{
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Model is Loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        console.log("Left Wrist x = "+left_wrist_x +" Left Wrist y = "+left_wrist_y);
        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;       
        console.log("Right Wrist x = "+right_wrist_x +" Right Wrist y = "+right_wrist_y);

        score_leftWrist = results[0].pose.keypoints[9].score;
        score_rightWrist = results[0].pose.keypoints[10].score;
        console.log("score_leftWrist "+score_leftWrist+" score_rightWrist "+score_rightWrist);   
    }

    
}
function draw()
{
image(video,0,0,600,500);
}

