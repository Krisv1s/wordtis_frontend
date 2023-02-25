using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace WordTris
{
    public class Words : MonoBehaviour
    {
        private const string DictionaryPath = "Dictionary/Russian";
        private HashSet<string> words;

        private void Awake()
        {
            LoadDictionary();
        }

        private void LoadDictionary()
        {
            TextAsset dictionaryTextFile = Resources.Load<TextAsset>(DictionaryPath);
            words = dictionaryTextFile.text.Split(",\n").Where(w => w.Length > 1).Select(w => w).ToHashSet();
        }

        public bool WordExists(string word)
        {
            return words.Contains(word);
        }
    }
}
