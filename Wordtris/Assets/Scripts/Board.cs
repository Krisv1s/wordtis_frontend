using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;
using WordTris.Letters;

namespace WordTris
{
    public class Board : MonoBehaviour
    {
        public event UnityAction<string> WordCollected;

        [SerializeField] private float _spawnTime;
        [SerializeField] private EntryPoint _entryPoint;
        [SerializeField] private Words _words;
        [SerializeField] private LettersPool _lettersPool;
        [SerializeField] private Input _input;
        [SerializeField] private Transform[] _spawnPoints;
        [SerializeField] private Button _mixButton;

        private int _counter;
        private float _timer;
        private bool _enabled;
        private List<Letter> _letters = new List<Letter>();
        private List<Letter> _word = new List<Letter>();

        private void OnEnable()
        {
            _entryPoint.GameStarted += OnGameStarted;
            _mixButton.onClick.AddListener(MixLetters);
        }

        private void OnDisable()
        {
            _entryPoint.GameStarted -= OnGameStarted;
            _mixButton.onClick.RemoveListener(MixLetters);
        }

        private void Update()
        {
            if (_enabled == false)
            {
                return;
            }

            _timer += Time.deltaTime;

            if (_timer > _spawnTime)
            {
                _timer = 0;
                CreateLetter();
            }

            if (UnityEngine.Input.GetMouseButtonUp(0))
            {
                CheckWord();
            }
        }

        public void MixLetters()
        {
            for (int i = 0; i < _letters.Count; i++)
            {
                _letters[i].Init(Alphabet.GetNextLetter());
            }
        }

        private void CreateLetter()
        {
            Letter letter = _lettersPool.Get();
            letter.Init(Alphabet.GetNextLetter());
            letter.Selected += OnLetterSelected;

            int pointIndex = _counter++ % _spawnPoints.Length;

            letter.transform.position = _spawnPoints[pointIndex].position;
            _letters.Add(letter);
        }

        private void OnLetterSelected(Letter letter)
        {
            _word.Add(letter);
        }

        private void CheckWord()
        {
            string word = "";

            for (int i = 0; i < _word.Count; i++)
            {
                word += _word[i].Value;
                _word[i].ResetSelection();
            }

            if (string.IsNullOrEmpty(word) == false && _words.WordExists(word))
            {
                CollectWord(_word);
                WordCollected?.Invoke(word);
            }

            _word.Clear();
        }

        private void CollectWord(List<Letter> word)
        {
            for (int i = 0; i < word.Count; i++)
            {
                word[i].Selected -= OnLetterSelected;
                _letters.Remove(word[i]);
                _lettersPool.Return(word[i]);
            }
        }

        private void OnGameStarted()
        {
            SetEnabled(true);
        }

        private void SetEnabled(bool enabled)
        {
            _enabled = enabled;
        }
    }
}
