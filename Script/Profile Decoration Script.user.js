// ==UserScript==
// @name         Profile Decoration Script
// @namespace    Github/LowOnGravity
// @version      2.1
// @description  If you ever wanted them for longer <3
// @author       Simon
// @match        https://discord.com/channels/*
// @match        https://discord.com/*
// @icon         https://cdn.discordapp.com/attachments/1038338241201455175/1058368199806173214/4344d3fe82f635cb12ad12917f472dfa.gif
// @grant        none
// ==/UserScript==
const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}
 
 
injectCss("Profile Decorations",`
 
 
.message-2CShn3.groupStart-3Mlgv1:not(.systemMessage-1H1Z20) .contents-2MsGLg::before {
content: '';
width: 50px;
height: 50px;
background: url("https://cdn.discordapp.com/avatar-decoration-presets/v2_a_0b2d5d75d4f1287befda6b2180aec41d.png?size=160&passthrough=true") center/cover;
transform: translate(-62px, -1px);
z-index: 99999;
position: absolute;
pointer-events: none;
}
 
 
 }`)
 
 
// Source links:
//
// December 2022
// blue: https://cdn.discordapp.com/attachments/1058662075385262100/1058662172651167744/caa099ee0308108e854dd9fa2dcfd2a6.png
// yellow: https://cdn.discordapp.com/attachments/1058662075385262100/1058662172344979486/bd9189e9280d3b0514cf14454a043485.png
// green: https://cdn.discordapp.com/attachments/1058662075385262100/1058662171984281620/a_ec7e6bb6c0c96acf4eb1ce04bc4ce727.png
// yellow-blue: https://cdn.discordapp.com/attachments/1058662075385262100/1058662171619369031/d52ff7e94c1374b4df069eee29a989cd.png
// purple: https://cdn.discordapp.com/attachments/1058662075385262100/1058682362550030378/63b0c16f26ec12091437a265de2ac957.png
// multi-color: https://cdn.discordapp.com/attachments/1058662075385262100/1058682362210287646/cf7947886380f467528d7302af3458da.png
// snowing-ice: https://cdn.discordapp.com/attachments/1058662075385262100/1058682361522425896/fe827a10fb05e1fdf87cc672118b7e04.png
//  melting-ice: https://cdn.discordapp.com/attachments/1058662075385262100/1058682361841197066/ae6f444cc3493d2a6bcb56f174d81fa6.png
 
 
// New  Nitro April 2023
 
// Autumn Like: https://cdn.discordapp.com/avatar-decoration-presets/v2_a_0b2d5d75d4f1287befda6b2180aec41d.png?size=160&passthrough=true
// Green Flowers: https://cdn.discordapp.com/avatar-decoration-presets/v2_a_d6760c807d460b45e06427c09ab61390.png?size=160&passthrough=true
// Pinkish Flowers: https://cdn.discordapp.com/avatar-decoration-presets/v2_a_37dc2b53b273a457ff19ac2e3fda7e4c.png?size=160&passthrough=true
// Red flowers: https://cdn.discordapp.com/avatar-decoration-presets/v2_a_9c70ff0db80d85ee6d9690a0eeded0c8.png?size=160&passthrough=true
// frog 1 : https://cdn.discordapp.com/avatar-decoration-presets/v2_a_683904e98e8e7bca912125d360293cc6.png?size=160&passthrough=true
