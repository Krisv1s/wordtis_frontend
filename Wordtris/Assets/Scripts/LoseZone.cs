using UnityEngine;
using UnityEngine.Events;
using WordTris.Letters;

namespace WordTris
{
    [RequireComponent(typeof(Collider2D))]
    public class LoseZone : MonoBehaviour
    {
        public UnityAction GameOver;

        private const float LetterSecondsToStay = 0.5f;

        private float _timer;
        private bool _timerEnabled;
        private Letter _letter;

        private void Start()
        {
            _timerEnabled = false;
        }

        private void Update()
        {
            if (_timerEnabled == false)
            {
                return;
            }

            _timer += Time.deltaTime;

            if (_timer > LetterSecondsToStay)
            {
                GameOver?.Invoke();
                enabled = false;
            }
        }

        private void OnTriggerEnter2D(Collider2D collision)
        {
            if (collision.TryGetComponent(out Letter letter))
            {
                _letter = letter;
                _timerEnabled = true;
            }
        }

        private void OnTriggerExit2D(Collider2D collision)
        {
            if (collision.TryGetComponent(out Letter letter) && _letter == letter)
            {
                _letter = null;
                _timer = 0;
                _timerEnabled = false;
            }
        }
    }
}
