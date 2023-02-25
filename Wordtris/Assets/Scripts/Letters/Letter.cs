using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

namespace WordTris.Letters
{
    [RequireComponent(typeof(Collider2D))]
    public class Letter : MonoBehaviour
    {
        public UnityAction<Letter> Selected;

        [SerializeField] private SpriteRenderer _letterIcon;

        private bool _selected;
        private char _letter;

        public char Value => _letter;

        public void Init(char letter)
        {
            _selected = false;
            _letter = letter;
            _letterIcon.sprite = Resources.Load<Sprite>($"Letters/{_letter}");
        }

        public void ResetSelection()
        {
            _selected = false;
        }

        private void OnMouseDown()
        {
            TrySelect();
        }

        private void OnMouseEnter()
        {
            TrySelect();
        }

        private void TrySelect()
        {
            if (UnityEngine.Input.GetMouseButton(0) == false)
            {
                return;
            }

            if (_selected)
            {
                return;
            }

            _selected = true;
            Selected?.Invoke(this);
        }
    }
}
