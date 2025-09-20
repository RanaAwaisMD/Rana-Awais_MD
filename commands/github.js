async function githubCommand(sock, chatId) {
    const repoInfo = `*Rana-Awais-MD*

*Github:*
https://github.com/RanaAwaisMD/Rana-Awais_MD

*Dont forget to star✨and fork our repo

*OUR OFFICIAL CHANNEL

https://chat.whatsapp.com/G8aPgC6wMmm1hojFU6qRwF?mode=ems_copy_t
`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419893616380@newsletter',
                    newsletterName: 'Rana-Awais-MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
