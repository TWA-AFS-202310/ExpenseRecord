namespace ExpenseRecord.SettingDTOs
{
    public class ExpenseStorageDBSetting
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CollectionName { get; set; } = null!;
    }
}
