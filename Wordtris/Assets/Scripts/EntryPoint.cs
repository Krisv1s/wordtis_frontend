using UnityEngine;
using UnityEngine.Events;

namespace WordTris
{
    public class EntryPoint : MonoBehaviour
    {
        public event UnityAction GameStarted;

        private void Start()
        {
            StartGame();
        }

        public void StartGame()
        {
            GameStarted?.Invoke();
        }
    }
}