import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import useSpeech from "../context/SpeechContext";


export async function Speak(synthesisText: string | number | undefined) {

    var synthesizer: any;
    var player;
    const {setPlay} = useSpeech();

    try {

        var speechConfig;
        speechConfig = sdk.SpeechConfig.fromSubscription(
            "17c13d7933294b8888c2a5eb7db14926",
            "southafricanorth"
        );

        speechConfig.speechSynthesisVoiceName =
            "Microsoft Server Speech Text to Speech Voice (so-SO, UbaxNeural)";

        player = new sdk.SpeakerAudioDestination();

        player.onAudioStart = function (_) {
            window.console.log("playback started");
            setPlay(true)
        };

        player.onAudioEnd = function (_) {
            window.console.log("playback finished");
            setPlay(false)
        };

        var audioConfig = sdk.AudioConfig.fromSpeakerOutput(player);

        synthesizer = new sdk.SpeechSynthesizer(
            speechConfig,
            audioConfig
        );

        const complete_cb = function () {
            synthesizer.close();
        };
        const err_cb = function () {
            synthesizer.close();
        };

        synthesizer.speakTextAsync(synthesisText, complete_cb, err_cb);

        //   return response.data.message
    } catch (error) {
        console.log(error)
    }
}