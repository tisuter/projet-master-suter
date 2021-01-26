/*
 var timeline = [];
*/
/*
  timeline.push({
    type: 'html-button-response',
    stimulus: '<div style="max-width:600px;"><p>Some browsers now require the user to interact with a page before it can play audio. '+
    'Clicking the button below counts as an interaction.</p><p>Be aware of this when planning audio experiments if '+
    'you want the first trial to include audio.</p></div>',
    choices: ['Continue']
  });

  timeline.push({
    type: 'audio-button-response',
    stimulus: 'sound/speech_green.mp3',
    choices: ['Green', 'Blue', 'Red'],
    prompt: "<p>What word was said?</p>"
  })


*/

/* skip audio text
var audio1 ={
    type: 'html-button-response',
    stimulus: '<div style="max-width:600px;"><p>Some browsers now require the user to interact with a page before it can play audio. '+
    'Clicking the button below counts as an interaction.</p><p>Be aware of this when planning audio experiments if '+
    'you want the first trial to include audio.</p></div>',
    choices: ['prochain']
  }
*/


// var audio1 = {
//     type: 'audio-button-response',
//     stimulus: 'sound/speech_green.mp3',
//     choices: ['oui', 'non'],
//     response_ends_trial: true,
//     response_allowed_while_playing: false,
//     prompt: '<h1>BONJOUR</h1>Kennst du dieses Wort?</p>'
// }

//
// var face_name_procedure = {
//     timeline: [
//         {
//             type: 'html-keyboard-response',
//             stimulus: '+',
//             choices: jsPsych.NO_KEYS,
//             trial_duration: 10
//         },
//         {
//             type: 'html-keyboard-response',
//             stimulus: jsPsych.timelineVariable('name'),
//             trial_duration: 10,
//             choices: jsPsych.NO_KEYS
//         },
//         {
//             type: 'html-keyboard-response',
//             stimulus: function () {
//                 var html = "<img src='" + jsPsych.timelineVariable('face', true) + "'>";
//                 html += "<p>" + jsPsych.timelineVariable('name', true) + "</p>";
//                 return html;
//             },
//             choices: jsPsych.NO_KEYS,
//             trial_duration: 2500
//         }
//     ],
//     timeline_variables: [
//         {face: 'person-1.jpg', name: 'Alex'},
//         {face: 'person-2.jpg', name: 'Beth'},
//         {face: 'person-3.jpg', name: 'Chad'},
//         {face: 'person-4.jpg', name: 'Dave'}
//     ],
//     randomize_order: true
// }
