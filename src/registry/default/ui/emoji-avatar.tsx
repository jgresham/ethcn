//  To match Rainbowkit ConnectButton's emoji avatar
//  src https://github.com/rainbow-me/rainbowkit/blob/main/packages/rainbowkit/src/components/Avatar/EmojiAvatar.tsx

import React, { useEffect, useMemo, useState } from 'react';

export const EmojiAvatar = ({ address, ensImage, size }: { address: string, ensImage: string, size: number }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (ensImage) {
      const img = new Image();
      img.src = ensImage;
      img.onload = () => setLoaded(true);
    }
  }, [ensImage]);

  const { color: backgroundColor, emoji } = useMemo(
    () => emojiAvatarForAddress(address),
    [address],
  );

  if (!address) {
    return <div style={{
      borderRadius: size,
      height: size,
      width: size,
    }} />
  }

  return ensImage ? (
    loaded ? (
      <div
        style={{
          backgroundSize: 'cover',
          borderRadius: size,
          backgroundImage: `url(${ensImage})`,
          backgroundPosition: 'center',
          height: size,
          width: size,
        }}
      />
    ) : (
      <div
        style={{
          alignItems: 'center',
          backgroundSize: 'cover',
          borderRadius: size,
          color: 'modalText',
          display: 'flex',
          justifyContent: 'center',
          height: size,
          width: size,
        }}
        className='bg-gray-200 dark:bg-gray-800'
      >
      </div>
    )
  ) : (
    <div
      style={{
        borderRadius: size,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        ...(!ensImage && { backgroundColor }),
        height: size,
        width: size,
      }}
    >
      {emoji}
    </div>
  );
};

const colors = [
  '#FC5C54',
  '#FFD95A',
  '#E95D72',
  '#6A87C8',
  '#5FD0F3',
  '#75C06B',
  '#FFDD86',
  '#5FC6D4',
  '#FF949A',
  '#FF8024',
  '#9BA1A4',
  '#EC66FF',
  '#FF8CBC',
  '#FF9A23',
  '#C5DADB',
  '#A8CE63',
  '#71ABFF',
  '#FFE279',
  '#B6B1B6',
  '#FF6780',
  '#A575FF',
  '#4D82FF',
  '#FFB35A',
] as const;

const avatars = [
  { color: colors[0], emoji: '🌶' },
  { color: colors[1], emoji: '🤑' },
  { color: colors[2], emoji: '🐙' },
  { color: colors[3], emoji: '🫐' },
  { color: colors[4], emoji: '🐳' },
  { color: colors[0], emoji: '🤶' },
  { color: colors[5], emoji: '🌲' },
  { color: colors[6], emoji: '🌞' },
  { color: colors[7], emoji: '🐒' },
  { color: colors[8], emoji: '🐵' },
  { color: colors[9], emoji: '🦊' },
  { color: colors[10], emoji: '🐼' },
  { color: colors[11], emoji: '🦄' },
  { color: colors[12], emoji: '🐷' },
  { color: colors[13], emoji: '🐧' },
  { color: colors[8], emoji: '🦩' },
  { color: colors[14], emoji: '👽' },
  { color: colors[0], emoji: '🎈' },
  { color: colors[8], emoji: '🍉' },
  { color: colors[1], emoji: '🎉' },
  { color: colors[15], emoji: '🐲' },
  { color: colors[16], emoji: '🌎' },
  { color: colors[17], emoji: '🍊' },
  { color: colors[18], emoji: '🐭' },
  { color: colors[19], emoji: '🍣' },
  { color: colors[1], emoji: '🐥' },
  { color: colors[20], emoji: '👾' },
  { color: colors[15], emoji: '🥦' },
  { color: colors[0], emoji: '👹' },
  { color: colors[17], emoji: '🙀' },
  { color: colors[4], emoji: '⛱' },
  { color: colors[21], emoji: '⛵️' },
  { color: colors[17], emoji: '🥳' },
  { color: colors[8], emoji: '🤯' },
  { color: colors[22], emoji: '🤠' },
] as const;

function hashCode(text: string) {
  let hash = 0;
  if (text.length === 0) return hash;
  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}

export function emojiAvatarForAddress(address: string) {
  const resolvedAddress = typeof address === 'string' ? address : '';
  const avatarIndex = Math.abs(
    hashCode(resolvedAddress.toLowerCase()) % avatars.length,
  );
  return avatars[avatarIndex ?? 0];
}