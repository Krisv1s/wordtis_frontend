using UnityEngine;
using UnityEngine.Events;

namespace WordTris
{
    public class Input : MonoBehaviour
    {
        public event UnityAction RightShiftReceived;
        public event UnityAction LeftShiftReceived;
        public event UnityAction DownShiftReceived;

        private readonly KeyCode[] RightShiftKeyCodes = new KeyCode[] { KeyCode.RightArrow };
        private readonly KeyCode[] LeftShiftKeyCodes = new KeyCode[] { KeyCode.LeftArrow };
        private readonly KeyCode[] DownShiftKeyCodes = new KeyCode[] { KeyCode.DownArrow };

        private void Update()
        {
            foreach (var keyCode in RightShiftKeyCodes)
            {
                if (UnityEngine.Input.GetKeyDown(keyCode))
                {
                    RightShiftReceived?.Invoke();
                }
            }

            foreach (var keyCode in LeftShiftKeyCodes)
            {
                if (UnityEngine.Input.GetKeyDown(keyCode))
                {
                    LeftShiftReceived?.Invoke();
                }
            }

            foreach (var keyCode in DownShiftKeyCodes)
            {
                if (UnityEngine.Input.GetKeyDown(keyCode))
                {
                    DownShiftReceived?.Invoke();
                }
            }
        }
    }
}
