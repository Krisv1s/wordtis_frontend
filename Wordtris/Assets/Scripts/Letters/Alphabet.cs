using UnityEngine;

namespace WordTris.Letters
{
    public static class Alphabet
    {
        private readonly static float[] _distributionValues = {
            0.0834211f, 0.0175561f, 0.0432647f, 0.0123011f, 0.0288826f, 0.0800232f, 0.0110104f, 0.0176351f,
            0.0634153f, 0.0284085f, 0.0327152f, 0.0386024f, 0.0198346f, 0.0693420f, 0.0886234f, 0.0337688f,
            0.0558029f, 0.0519308f, 0.0723712f, 0.0214809f, 0.0027263f, 0.0057423f, 0.0051760f, 0.0133021f,
            0.0075730f, 0.0057555f, 0.0003951f, 0.0275919f, 0.0388394f, 0.0010668f, 0.0036219f, 0.0178195f
        };

        private readonly static char[] _alpabet = {
            'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç',
            'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï',
            'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷',
            'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'
        };

        public static char GetNextLetter()
        {
            float random = Random.value;
            return _alpabet[GetDistributionIndex(random)];
        }

        private static int GetDistributionIndex(float number)
        {
            float sum = 0;

            for (int i = 0; i < _distributionValues.Length; i++)
            {
                sum += _distributionValues[i];

                if (number < sum)
                {
                    return i;
                }
            }

            return -1;
        }
    }
}
