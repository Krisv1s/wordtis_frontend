using TMPro;
using UnityEngine;

namespace WordTris
{
    public class Score : MonoBehaviour
    {
        [SerializeField] private Board _board;
        [SerializeField] private TMP_Text _text;

        private int _score;

        private void OnEnable()
        {
            _board.WordCollected += OnWordCollected;
        }

        private void OnDisable()
        {
            _board.WordCollected -= OnWordCollected;
        }

        public int TotalScore => _score;

        private void OnWordCollected(string word)
        {
            _score += word.Length;
            _text.text = _score.ToString();
        }
    }
}
