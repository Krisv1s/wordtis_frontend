using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace WordTris.Letters
{
    public class LettersPool : MonoBehaviour
    {
        [SerializeField] private Scale _scale;
        [SerializeField] private Letter _letterPrefab;
        [SerializeField] private int _lettersCount;

        private List<Letter> _letters;

        private void Start()
        {
            _letters = new List<Letter>();

            for (int i = 0; i < _lettersCount; i++)
            {
                CreateLetter();
            }
        }

        private Letter CreateLetter()
        {
            var spawnPosition = transform.position;
            Letter letter = Instantiate(_letterPrefab, spawnPosition, Quaternion.identity, transform);
            letter.transform.localScale = _scale.LetterScale;
            letter.gameObject.SetActive(false);
            _letters.Add(letter);
            return letter;
        }

        public Letter Get()
        {
            Letter letter = _letters.FirstOrDefault(l => l.gameObject.activeSelf == false);

            if (letter == null)
            {
                letter = CreateLetter();
            }

            letter.gameObject.SetActive(true);
            letter.transform.SetParent(null);
            return letter;
        }

        public void Return(Letter letter)
        {
            letter.gameObject.SetActive(false);
            letter.transform.position = transform.position;
            letter.transform.SetParent(transform);
        }
    }
}
