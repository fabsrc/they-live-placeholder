<?php
require __DIR__.'/vendor/autoload.php';

use GDText\Box;
use GDText\Color;

$url = parse_url($_SERVER['REQUEST_URI']);
preg_match('/\/(\d+)(x(\d+))?(\.(\w+))?/', $url['path'], $match);
$width = !empty($match[1]) ? $match[1] : 500;
$height = !empty($match[3]) ? $match[3] : $width;
$width = min($width, 3000);
$height = min($height, 3000);
$format = isset($match[5]) ? $match[5] : 'png';
$font_size = min([$height / 8.5,$width / 8.5]);


$slogans = [
'Obey',
'Obey and Conform',
'Marry and Reproduce',
'Watch T.V.',
'Stay Asleep',
'No Thought',
'Submit',
'Conform',
'This is your God',
'No Independent Thought',
'Buy',
'Do Not Think',
'Do Not Question Authority',
'Work 8 Hours',
'Play 8 Hours',
'Sleep 8 Hours',
'Stay Asleep'
];

$random_slogan = $slogans[mt_rand(0, count($slogans) - 1)];

if (isset($_SERVER['QUERY_STRING'])) {
    parse_str($_SERVER['QUERY_STRING'], $queries);
    $text = strtoupper(
        array_key_exists('text', $queries) ? 
        $queries['text']  : 
        $random_slogan
    );
} else {
    $text = strtoupper($random_slogan);
}

$im = imagecreatetruecolor($width, $height);

$backgroundColor = imagecolorallocate($im, 255, 255, 255);
imagefill($im, 0, 0, $backgroundColor);

$borderColor = imagecolorallocate($im, 225, 225, 225);
imagerectangle($im, 0, 0, $width-1, $height-1, $borderColor);

$box = new Box($im);
$box->setFontFace(__DIR__.'/fonts/font.otf');
$box->setFontColor(new Color(0, 0, 0));
$box->setFontSize($font_size);
$box->setBox(20, 20, $width - 40, $height - 40);
$box->setTextAlign('center', 'center');
$box->setLineHeight(1);
$box->draw($text);

switch ($format) {
case 'gif':
    header('Content-type: image/gif');
    imagegif($im);
    break;

case 'jpg':
case 'jpeg':
    header('Content-type: image/jpeg');
    imagejpeg($im);
    break;

case 'png':
    header('Content-type: image/png');
    imagepng($im);
    break;

default:
    die('Unsupported File Format. Use png, jpeg or gif.');
    break;
}
?>